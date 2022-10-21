var PORT = process.env.PORT || 3000;
var ENV = process.env.NODE_ENV || "development";

var express = require("express");
var app = express();
var server = require("http").createServer(app);
const path = require("path");

// setup deployd
require("deployd").attach(server, {
  env: ENV,
  db: {
    connectionString:
      "mongodb://root:g38ddvnz@ac-izuhjrx-shard-00-00.xn96fal.mongodb.net:27017,ac-izuhjrx-shard-00-01.xn96fal.mongodb.net:27017,ac-izuhjrx-shard-00-02.xn96fal.mongodb.net:27017/test?ssl=true&replicaSet=atlas-bxwx8b-shard-0&authSource=admin&retryWrites=true&w=majority",
  },
});

// precisa vir antes do server.handler para funcionar
app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});
// app.get("/users", (req, res) => {
//  res.send({ message: "TESTE" });
// });


// After attach, express can use server.handleRequest as middleware
app.use(server.handleRequest);

// start server
server.listen(PORT, () => {
  console.log('Servidor rodando na porta:', PORT)
});
