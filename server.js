// set up, get all tools we need
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const path = require('path')
const mountRoutes = require('./routes')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const cors = require('cors')
app.use((req, res, next) => {
    res.removeHeader('X-Powered-By')
    next()
})

// set basedir path
global.__basedir = __dirname

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'))

mountRoutes(app)


app.listen(port)
console.log('\x1b[36m%s\x1b[0m','Magic happens on port:', port)
module.exports = app
