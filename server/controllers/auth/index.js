const express = require('express');
const authService = require('../../services/auth');  

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

// Then pass them to cors:
//router.use(cors(corsOptions));

router.use(require('cookie-parser')());

router.get('/signup', authService.signup); 
router.get('/signin', authService.signin); 
router.get('/user', authService.getUser); 

module.exports = router;