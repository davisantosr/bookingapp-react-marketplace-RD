import express from 'express';
import authController from '../controllers/auth.js';

const authLogin = express.Router();
const auth = new authController()

authLogin.post('/', auth.login);


export default authLogin;
