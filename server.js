const express = require("express")
const app = express()
require('dotenv').config();
const port = process.env.PORT || 5000
const apirouter = require('./router/apirouter')

app.use('/api/', apirouter)
app.listen(port, () => {
    console.log(`server is running ${port}`);
})