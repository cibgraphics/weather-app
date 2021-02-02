const express = require('express');
const path = require('path');

// Create App
const app = express();

app.use(express.static('public'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});