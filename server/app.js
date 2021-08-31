const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const publicRoutes = require('./routes/publicRoutes')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/public', publicRoutes)

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    'mongodb+srv://root:MHlDw6ve2wSxk64w@cluster0.306uy.mongodb.net/Louvre?retryWrites=true&w=majority'
  )
  .then((result) => app.listen(3000))
  .then(() => console.log('app is running on port 3000'))
  .catch(console.log);
