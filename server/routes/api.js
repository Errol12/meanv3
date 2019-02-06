const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
//const Video = require('../models/video');

router.get('/api',function(req,res){
	res.send('api works');
});

module.exports = router;