const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');

router.post('/register', authCtrl.registerStudent);
router.post('/register-professor', authCtrl.registerProfessor);
router.post('/login', authCtrl.login);
router.post('/forgot-password', authCtrl.forgotPassword);

module.exports = router;
