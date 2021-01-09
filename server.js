const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')

//may need to come back to this line and change port to work with Atlas 

const PORT = process.env.PORT || 1234

const app = express();
app.use(logger('dev'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))


app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})