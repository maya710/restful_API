const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//--Middleware
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//---Middleware
// app.use('/posts', () => {
//     console.log('This is a middleware running');

// });


//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

// app.get('/posts', (req, res) => {
//     res.send('we are on posts');
// });
//-- Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB ')

);

// How to we start listening to the server
app.listen(3000, () => {
    console.log('listening at 3000');
});