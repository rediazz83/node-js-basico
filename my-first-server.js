//Cargando modulo http
var http = require("http");
var fileSystem = require("fs");
const SC_OK = 200;
const SC_NOT_FOUND = 404;

//Servidor 'hola mundo'
var server = http.createServer(
  function(rq, rs) {
    console.log(rq.url);

    if(rq.url === "/") {
      fileSystem.readFile("index.html", function(err, data) {
        rs.writeHead(SC_OK, {"Content_Type": "text/html"});
        rs.end(data);
      });
    } else
    if(rq.url === "/img/node-logo.png") {
      fileSystem.readFile("./img/node-logo.png", function(err, data) {
        rs.writeHead(SC_OK, {"Content_Type": "image/png"});
        rs.end(data);
      });
    } else {
      rs.writeHead(SC_OK, {"Content_Type": "text/html"});
      rs.end("<h1>Pagina no encontrada</h1>");
    }
  }
);

//Configuracion de puerto en que estaremos escuchando
server.listen(8080);

//Mensaje de escucha
console.log("Esperando peticiones en el puerto 8080");
