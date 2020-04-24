//npm install colors --save
//--save agrega este modulo como un paquete de dependencia, consultar en package.json


//forma correcta modulos del sistema y despues mis modulos
var colors = require('colors/safe');

//aumentar el .argv para acortar la instancia al llamar el atributo
const argv = require("./config/yargs").argv;
/////CORE APLICACION
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar")

//argv es un objeto
//console.log(argv.base, argv.limite);
let comando = argv._[0];
let base = argv.base
let limite = argv.limite
switch (comando) {
    case 'listar':
        //console.log("hay que listar");
        listarTabla(base, limite);
        break;
    case 'crear':
        //console.log('hay que crear el archivo');
        //crearArchivo(argv.base)
        crearArchivo(base, limite)
            .then(mensaje => console.log(colors.red(mensaje)))
            .catch(err => console.log(colors.red(err)));
        //cuando se usa el async y await
        //.throw(err => console.log(err.message)
        break;
    default:
        console.log('comando no válido');

}






//console.log(module);
//(CONTIENE TODA LA INFO DEL SISTEMA)donde es, que modulos tiene-- entonces  el process.argv
//donde esta guardado el interprete 
//permiter obtener todos los argumentos que estoy enviando al momento de ejecutar el programa
//node app --base=5 --limite 10
//console.log(process.argv)
//node app listar --base=5 --limite=10
//const { crearArchivo } = require("./multiplicar/multiplicar")
//let base = 9;

// let base = process.argv[2].split('=' [1]);