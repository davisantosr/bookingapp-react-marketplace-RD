import {Router} from 'express';
import authLogin from './authLogin.js';
import authRegister from './authRegister.js'

const routes = Router();

routes.use('/register', authRegister);
routes.use('/login', authLogin);



export default routes;