const express = require("express")
const exphbs = require("express-handlebars")
const path = require("path");
const morgan = require("morgan")
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")))

//HTTP logger
app.use(morgan("tiny"))

//Template engine handlebars
app.engine('hbs', exphbs({
  extname: 'hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))

//Route
app.get("/", (req, res) => {
  res.render('home')
})
app.get("/news", (req, res) => {
  res.render('news')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});