const express = require('express');
const router = express.Router();
const cors = require('cors');

//const User = require('../models/Users');



router.use(cors());


router.get('/', getHome)

function getHome(req, res){
    res.send("Home page");
}


module.exports= router;