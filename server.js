const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const hbs = require('hbs')
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials/')
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    res.render('home', {
        titulo : "Fullstack Developer",
        info : "Front-End Developer Yucateco y apasionado de la tecnologia, los libros, aprender y eneseñar."
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        description : "Soy estudiante autodidacta desde hace mucho.Inicie muy temprano mi camino como programador, por lo que descubri que era mi pasion y era a lo que me queria dedicar toda mi vida.Soy un amante de los libros, siempre me gusta aprender y tambien me encanta enseñar"
    })
})

app.listen(port, () => console.log(`listening on port ${port}!`))