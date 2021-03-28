import express from 'express';

import {authController} from '../controllers/auth.js';

const routerRegister = express.Router();
const auth = new authController();

routerRegister.post('/', auth.register);


export default routerRegister;
