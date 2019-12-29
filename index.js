const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//import models
require('./models/Product');


const app = express();

//create admin for DB
var mongoPort    = '27017'
var mongoHost    = 'localhost'

var dbName       = 'issueTracker'
//var userName     = 'admin'
//var userPassword = 'admin'

//connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+ mongoHost + ':' + mongoPort + '/' + dbName, 
{
    useUnifiedTopology:true, 
    useNewUrlParser:true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', () => {
    console.log('DB connected.');
});

app.use(bodyParser.json());

//import routes
require('./routers/productRoute')(app);

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