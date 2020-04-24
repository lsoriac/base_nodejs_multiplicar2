////CONFIGURACION
let opc = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opc)
    .command('crear', 'Crea un archivo de la tabla multiplicar', opc)
    .help()
    .argv
    //exportar módulo
module.exports = {
    argv
}