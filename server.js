const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
// const router = require('./routes/router');
const connecttDB = require('./config/db');

// Connect to MongoDB
connecttDB();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', router);
app.get('/', (req, res) => {
  res.send('Hello World');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});