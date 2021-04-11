const express = require('express')
const app = new express()
const path = require('path')

const ejs = require('ejs')
app.set('view engine', 'ejs')

//Đăng ký thư mục public.
app.use(express.static('public'))



app.get('/', (request, response) => {
    response.render('index')
})

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/post', (req, res) => {
    res.render('post')
})


app.listen(3000, () => { })
