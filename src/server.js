const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(path.join("index.js"));
});

app.listen(8080, function() {
    console.log("Servidor escuchando por el puerto 8080");
  });