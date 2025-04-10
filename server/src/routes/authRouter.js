const authRouter = require('express').Router();
const { Router } = require('express');
const authController = require('../controllers/authController');


authRouter.post('/signup', authController.signUp);
authRouter.post('/login', authController.logIn);
authRouter.get('/logout', authController.logOut);



module.exports = authRouter;
