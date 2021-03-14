import express from 'express';

import {authController} from '../controllers/auth.js';

const router = express.Router();
const auth = new authController();

router.post('/', auth.register);


export default router;
