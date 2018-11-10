var fileSystem = require("fs");

var fileName = "lorem-ipsum.txt";

//lectura sincrona del archivo
var resultado = fileSystem.readFileSync(fileName);
console.log(resultado.toString());

/*lectura asincrona del archivo. Se hace posible a traves de la funcion callback
que imprime o lanza un error segun corresponda*/
fileSystem.readFile(fileName, function(err, data) {
    if(err) {
      throw err;
    }

    console.log("Leyendo archivo... ");
    console.log(data.toString());
    console.log("... fin lectura");
  }
);
