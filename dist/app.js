"use strict";

var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

// Servir archivos estáticos (CSS, JS, etc.)
app.use(express["static"](path.join(__dirname, '../public')));

// Ruta principal
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.listen(port, function () {
  console.log("Servidor escuchando en http://localhost:".concat(port));
});