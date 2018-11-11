//Cargando modulo http
var http = require("http");
const SC_OK = 200;

//Servidor 'hola mundo'
var server = http.createServer(
  function(rq, rs) {
    rs.writeHead(SC_OK, {"Content_Type": "text/html"});
    rs.end("<h1>Hola Mundo!</h1>");
  }
);

//Configuracion de puerto en que estaremos escuchando
server.listen(8080);

//Mensaje de escucha
console.log("Esperando peticiones en el puerto 8080");
