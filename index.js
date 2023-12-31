const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/webapp/index.html'));
});

app.get('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/webapp/style.css'));
});

app.get('/app.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/webapp/app.js'));
});

console.log(`PLANNING TO USE PORT: ${port}`)
app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}!`))
