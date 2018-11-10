# node-js-basico

Que es Node?
Node.js es un entorno JavaScript de lado de servidor que utiliza un modelo asíncrono y dirigido por eventos.
Es una Máquina Virtual tremendamente rápida y de gran calidad escrita por gente como Lars Bak, uno de los mejores ingenieros del mundo especializados en VMs(Virtual Machines). No olvidemos que V8 es actualizado constantemente y es uno de los intérpretes más rápidos que puedan existir en la actualidad para cualquier lenguaje dinámico. Además las capacidades de Node.js para I/O (Entrada/Salida) son realmente ligeras y potentes, dando al desarrollador la posibilidad de utilizar a tope la I/O del sistema.
Node soporta protocolos TCP, DNS y HTTP.  Y fue creado por Ryan Dahl en 2009 y su evolución está apadrinada por la empresa Joyent que además tiene contratado a Dahl.
Uno de los puntos fuertes de Node.js es su capacidad de mantener muchas conexiones abiertas y esperando. En Apache por ejemplo el parámetro MaxClients por defecto es 256. Este valor puede ser aumentado para servir contenido estático, sin embargo si se sirven aplicaciones web dinámicas en PHP u otro lenguaje es probable que al poner un valor alto el servidor se quede bloqueado ante muchas conexiones esto dependerá del trabajo que la aplicación web de lado del servidor y de su capacidad hardware.


Documentacion del api node:
https://nodejs.org/api/index.html


Instalacion de Node.js en Ubuntu
$ sudo apt-get install -y build-essential


# Luego bajar un script y ejecutarlo, en nuestro caso:
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -


# Ahora lo instalamos mediante apt-get:
$ sudo apt-get install -y nodejs


# Verificamos la versión de node.js que instalamos con el siguiente comando:
$ node -v


# Para acceder a la consola de node:
$ node
> 2+2;
4
> console.log('Hello World!');
Hello World!
undefined
>


Que es Node Package Manager? (npm)
Es un gestor de paquetes, el cual hará más fáciles nuestras vidas al momento de trabajar con Node, ya que gracias a él podremos tener cualquier librería disponible con solo una línea de código, npm nos ayudará a administrar nuestros módulos, distribuir paquetes y agregar dependencias de una manera sencilla.


Instalacion:
$ sudo apt-get install npm


# Verificacion:
$ npm -v


# Usando npm. Para instalar un paquete de forma local al proyecto:
$ npm install nombre_paquete@version


# Para instalar un paquete de forma local al proyecto, actualizando el archivo package.json:
$ npm install --save nombre_paquete@version


# Para ver la lista de paquetes instalados de forma local:
$ npm list


# Para instalar un paquete de forma global:
$ npm install Nombre_paquete@version -g


# Para ver la lista de paquetes instalados de forma global:
$ npm -g list (para ver toda la lista)
$ npm -g list --depth=0 (para pedir con nivel de profundidad)


# Para eliminar un paquete de forma global:
npm -g uninstall node-inspector


Que es nvm?
NVM (Node Version Manager) es un bash script que nos permite tener diferentes versiones de node.js instaladas. 


Instalacion:
$ curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh
$ nano install_nvm.sh
$ source ~/.profile
$ nvm ls-remote


# Una vez instalado ya se puede descargar otras versiones de node
$ nvm install 6.1.0


# Usarlas
$ nvm use 6.1.0


# En mi caso, tenía problemas para instalar node-inspector pues no estaba en la version que tenía
# Ahora si puedo instalarlo usando la version6.1.0
$ npm install -g node-inspector


Indices de estabilidad de librerias en el api node:
Stability: 0 - Deprecated

This feature is known to be problematic, and changes are
planned.  Do not rely on it.  Use of the feature may cause warnings.  Backwards
compatibility should not be expected.


Stability: 1 - Experimental
This feature was introduced recently, and may change
or be removed in future versions.  Please try it out and provide feedback.
If it addresses a use-case that is important to you, tell the node core team.


Stability: 2 - Unstable
The API is in the process of settling, but has not yet had
sufficient real-world testing to be considered stable. Backwards-compatibility
will be maintained if reasonable.


Stability: 3 - Stable
The API has proven satisfactory, but cleanup in the underlying
code may cause minor changes.  Backwards-compatibility is guaranteed.


Stability: 4 - API Frozen
This API has been tested extensively in production and is
unlikely to ever have to change.


Stability: 5 - Locked
Unless serious bugs are found, this code will not ever
change.  Please do not suggest changes in this area; they will be refused.
