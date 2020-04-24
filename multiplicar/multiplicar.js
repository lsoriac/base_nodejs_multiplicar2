const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
            //validar q la base sea un numero
            if (!Number(base)) {
                reject(`El valor de la base ${base} no es válido`)
                    //el reject no es un return
                return;
            }

            //let base = '';
            let data = '';

            for (let i = 1; i <= limite; i++) {
                data += `${base} x ${i} = ${base * i}\n`
            }

            fs.writeFile(`./tablas/tabla_del_${base}al ${limite}.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    console.log(`El archivo de la tabla del ${base} al ${limite} ha sido guardado`)
            })

        }

    )
}

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
    //para exportar los módulos
module.exports = {
    //exportar esta funcion del módulo
    crearArchivo,
    listarTabla
    //atributo: valor
    //crearArchivo:crearArchivo-en este caso como se le va a dar el mismo nombre se le manda asi
}