const express= require('express');
const cors= require('cors');
const bodyParser = require('body-parser');
const app= express();
const port= 8001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/*
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_name', {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', function(){
    console.log("connected");
});

mongoose.set('useFindAndModify', false);
*/

const homeRoutes = require('./routes/home');
app.use('/home', homeRoutes);

app.get('/hi',(req,res)=>{
	res.send("hi")
})

app.get('/',(req,res)=>{
	res.send("invalid request")
})

app.listen(port, () => console.info('REST API running on port '+ port));