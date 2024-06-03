const express = require("express")
const app = express()
const apirouter = require('./apirouter')
require('dotenv').config();

const port = process.env.PORT || 5000
app.use(apirouter)
app.listen(port, () => {
    console.log(`server is running ${port}`);
})