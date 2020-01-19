require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()

mongoose.connect(process.env.DB_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(process.env.APP_PORT, () => {
    console.log(`Backend listening on port: ${process.env.APP_PORT}`)
})