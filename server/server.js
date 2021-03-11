const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.status(200).send('api is running')
})

app.listen(5000, () => console.log('API is running on port 5000'));