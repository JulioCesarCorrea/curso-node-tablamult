const fs = require('fs')
const colors = require('colors')
// mi primera forma
// const crearArchivo = (base) => {
//     let salida = ""
//     let nombreArchivo = ""    
//     for(let i = 1; i <=10; i++){
//         salida += (`${base} * ${i} = ${base*i}\n` )
//     }
//     fs.writeFileSync(`tabla-${base}.txt`,salida)
//     nombreArchivo = `tabla-${base}.txt`
//     return nombreArchivo
// }
// const ejecutarFuncion = (base) => {
//     return new Promise (( resolve,reject ) => {
//         let nombre = crearArchivo(base)
//         nombre? resolve(nombre): reject(`No se pudo crear el archivo ${nombre}`)
//     })
// }
// ejecutarFuncion()
//     .then(nombre => console.log(nombre))
//     .catch(err => console.log(err))
// module.exports = {
//     ejecutarFuncion
// }
// curso forma 1
colors.setTheme({
    miprimercolor: ['brightBlue', 'underline']
});
const crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let salida = ""
        let nombreArchivo = ""
        for (let i = 1; i <= 10; i++) {
            salida += (`${base} * ${i} = ${base * i}\n`)
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        nombreArchivo = `tabla-${base}.txt`
        resolve(nombreArchivo)
    })

}


//curso forma 2

const crearArchivoasync = async (base, eslista, limite) => {
    try {
        let salida = ""
        let nombreArchivo = ""
        if (limite) {
            for (let i = 1; i <= limite; i++) {
                salida += (`${base} * ${i} = ${base * i}\n`)
            }

        }
        else {
            for (let i = 1; i <= 10; i++) {
                salida += (`${base} * ${i} = ${base * i}\n`)
            }
        }
        if (eslista) {
            console.log(salida.miprimercolor)
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        nombreArchivo = `tabla-${base}.txt`
        return (nombreArchivo)
    }
    catch (err) {
        throw err
    }
}
module.exports = {
    // crearArchivo,
    crearArchivoasync
}