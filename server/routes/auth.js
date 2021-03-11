import express from 'express';

import {showMessage} from '../controllers/auth.js';

const router = express.Router();

router.use('/running', showMessage);


export default router;
