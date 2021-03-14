import express from 'express';
import router from './routes/index.js';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();


// autoloading routes
// import fs from 'fs';
// autoloading routes
// fs.readdirSync('./routes').map((route) => app.use('/api', require(`./routes/${route}`)));  

connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', router);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API is running on port ${PORT}`));