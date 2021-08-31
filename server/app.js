const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    'mongodb+srv://root:MHlDw6ve2wSxk64w@cluster0.306uy.mongodb.net/Louvre?retryWrites=true&w=majority'
  )
  .then((result) => app.listen(3000))
  .then(() => console.log('app is running on port 3000'))
  .catch(console.log);
