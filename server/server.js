import express from 'express';
import router from './routes/auth.js';

const app = express();

app.use('/api', router)



app.listen(5000, () => console.log('API is running on port 5000'));