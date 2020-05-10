const express = require('express')
const path = require('path')


const app = express()
const PORT = 3000

// Setting EJS Engine
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('pages/index')
})

app.get('/about', function(req, res){
    res.render('pages/about')
})

app.get('/content', function(req, res){
    res.render('pages/content')
})

app.get('/contact', function(req, res){
    res.render('pages/contact')
})

// Temporary page
app.get('/form', function(req, res){
    res.render('partials/postForm')
})

// App usages
app.use(express.static('views'))

app.listen(PORT, ()=>{
    console.log(`Server is running pn port ${PORT}`);
})