const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//import models
require('./models/Product');

//import routes
require('./routers/productRoute')(app);


//create admin for DB
//TODO: get password and user name on sign in page 
const password = 'admin';
const userName = 'admin';
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${userName}:${password}@cluster0-e8hyg.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
client.once('open', () => {
    console.log('DB connected.');
});

app.use(bodyParser.json());



//configue project production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    })
}

//set port to 7000 if we dont have default port yet
const port = process.env.PORT || 5000;

//test send request
app.get('/', (req,res)=>{
    res.render('index');
});

//server running information
const server = app.listen(port, () => {
    console.log(`Express running port ${server.address().port}`);
});