const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:7000/mongooseDB', 
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

//set port to 7000 if we dont have default port yet
const port = process.env.PORT || 5000;

//send request
app.get('/', (req,res)=>{
    res.render('index');
});

//server running information
const server = app.listen(port, () => {
    console.log(`Express running port ${server.address().port}`);
});