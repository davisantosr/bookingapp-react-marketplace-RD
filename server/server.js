import express from 'express';
import router from './routes/index.js'

// autoloading routes
// import fs from 'fs';
// autoloading routes
// fs.readdirSync('./routes').map((route) => app.use('/api', require(`./routes/${route}`)));  

const app = express();

app.use('/api', router)



app.listen(5000, () => console.log('API is running on port 5000'));