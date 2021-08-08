const express = require('express')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const route = require('./routes')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//HTTP logger
app.use(morgan('tiny'))

//Template engine handlebars
app.engine('hbs', exphbs({
  extname: 'hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))

//Routing
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});