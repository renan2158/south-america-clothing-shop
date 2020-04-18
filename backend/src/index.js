const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(routes);

app.listen(3333);