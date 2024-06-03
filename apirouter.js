const express = require('express');
const app = express.Router();
const { rou, heloroute } = require('./controller/apiController');

app.get('/', rou);
app.get('/hello', heloroute);


module.exports = app;
