//Importar módulo File System para manejo de archivos
const fs = require('fs');
//Importar módulo Colors para manejar colores en consola
const colors = require('colors');
//Contiene promesas
let crearArchivo = (base, limite) => {
        return new Promise((resolve, reject) => {
            //validar q la base sea un numero
            if (!Number(base)) {
                reject(`El valor de la base ${base} no es válido`)
                    //el reject no es un return
                return;
            }
            let data = '';
            //itera los números hasta el límite dado por consola
            for (let i = 1; i <= limite; i++) {
                //almacena todo en una cadena
                data += `${base} x ${i} = ${base * i}\n`
            }
            //Escribe en un archivo la data(tabla de multiplicar) que generamos antes
            fs.writeFile(`./tablas/tabla_del_${base}al ${limite}.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    console.log(`El archivo de la tabla del ${base} al ${limite} ha sido guardado`)
            })
        })
    }
    //se lista la tabla de multiplicar según los parámetros
    //función mas simple solo recibe parámetro e imprime
let listarTabla = (base, limite) => {
        if (!Number(base)) {
            console.log(`El valor de la base ${base} no es válido`);
            return;
        }
        console.log("==========================".green);
        console.log(`TABLA DE MULTIPLICAR ${base}`.green);
        console.log("==========================".green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base * i}\n`)
        }
    }
    //para exportar los módulos y poder usarlos en otro js
module.exports = {
    crearArchivo,
    listarTabla
}