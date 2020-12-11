const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const verificationSignUp = require('../middlewares/verificationSignUp');

router.post('/signup',verificationSignUp, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;