const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const cors = require('cors');

const publicRoutes = require('./routes/publicRoutes')
const privateRoutes = require('./routes/privateRoutes')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/public', publicRoutes)
app.use('/private', privateRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(process.env.DB_URL)
  .then((result) => app.listen(5000))
  .then(() => console.log('app is running on port 5000'))
  .catch(console.log);
