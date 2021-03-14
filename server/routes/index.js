import {Router} from 'express';
import authRouter from './auth.js'

const routes = Router();

routes.use('/register', authRouter);



export default routes;