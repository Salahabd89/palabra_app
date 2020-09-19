const express = require('express');
const addservice = require('../services/');  
const teamService = require('../services/teams');  
const topics = require('../services/machinelearning/topics')


var router = express.Router();

var whitelist = ['http://localhost:5050']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
} 

router.use(require('cookie-parser')());

router.get('/add/', addservice.addtodb); 
router.get('/words', addservice.getwords); 
router.get('/definition/:word', addservice.getDefinition); 
router.get('/topics/', topics.getTopics); 
router.get('/console/:user', addservice.getConsole); 
router.get('/teams/add', teamService.addteam); 



module.exports = router;