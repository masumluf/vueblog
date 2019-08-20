const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const cors = require('cors');

const app = express();

//midleware
app.use(bodyParser.json());
app.use(cors());

const post = require('./router/api/posts')

app.use('/api/posts', post);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on Port ${port}`));