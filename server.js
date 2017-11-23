const express = require("express");
const app = express();

app.use("/build", express.static(__dirname + "/build"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(8080, (req, res) => console.log("Aplicação rodando em localhost:8080"))