var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('this is version 2 of the app!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Marte!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

