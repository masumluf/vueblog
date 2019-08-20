const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//midleware
app.use(bodyParser.json());
app.use(cors());

const post = require('./router/api/posts')

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on Port ${port}`));