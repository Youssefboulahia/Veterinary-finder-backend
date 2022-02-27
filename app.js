const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res) => {
    res.status(200).send({test:"Hello World"});
});


app.get('/ahmed', (req, res) => {
    res.status(200).send({test:"Hello from Ahmed Branch"});
});


app.get('/zineddine', (req, res) => {
    res.status(200).send({test:"Hello zineddine's branch"});
});
app.get('/zineddine2', (req, res) => {
    res.status(200).send({test:"Hello zineddine's 2nd commt branch"});
});
app.listen(8080);
console.log('listening on port ',port);