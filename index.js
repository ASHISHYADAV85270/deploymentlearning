var express = require('express')
require('dotenv').config()
var app = express()
app.get('/', function (req, res) {
    res.send('hello world')
})
app.get('/login', function (req, res) {
    res.send('Login Page');
})
app.get('/aboutme', function (req, res) {
    res.json({ "name": "Ashish Yadav", "About": "Learning Production" });
})


app.listen(process.env.PORT, () => console.log(`listing at port number ${process.env.PORT}`));