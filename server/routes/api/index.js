const
    express = require('express'),
    addController = require('../../controllers/add');
    authController = require('../../controllers/auth');

let router = express.Router();

router.use('/', addController);
router.use('/auth', authController);

module.exports = router;