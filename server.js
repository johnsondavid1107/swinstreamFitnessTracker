const express = require('express')
const mongoose = require("mongoose")
const db = require("./models")
const logger = require('morgan')
const path = require('path')


//may need to come back to this line and change port to work with Atlas 

const PORT = process.env.PORT || 1234

const app = express();
app.use(logger('dev'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true })

require('./routes/htmlRoutes.js')(app)
require('./routes/apiRoutes.js')(app)




app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})