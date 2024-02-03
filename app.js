// const { crearArchivo } = require("./helpers/multiplicar.js")
const argv  = require("./config/yargs.js")
const { crearArchivoasync } = require("./helpers/multiplicar.js")
const colors = require('./node_modules/colors');
 console.clear()

crearArchivoasync(argv.b,argv.l,argv.h)
    .then(nombre => console.log(nombre.blue, 'creado'.white))
    .catch(err => console.log(err))










//argumentos de consola, parametros escritos en la consola manejo primitivo
// const [,,basearray] = process.argv
// const [, base] = basearray.split("=")
// console.log(base)




// crearArchivo(base)
//     .then(nombre => console.log(nombre, 'creado'))
//     .catch(err => console.log(err))

// crearArchivoasync(base)
//     .then(nombre => console.log(nombre, 'creado async'))
//     .catch(err => console.log(err))




//mi forma de llamar la promesa
// const { ejecutarFuncion } = require("./helpers/multiplicar.js")

// console.clear()
// const base = 5

// const nombre = ejecutarFuncion(base)
// console.log(nombre)



// .then( nombreArchivo => console.log(nombreArchivo,"creado"))
    // .catch(err => console.log(err))
// fs.writeFile(`tabla-${base}.txt`,salida,'', (err) =>{
//     if(err) throw err
//     console.log(`tabla del ${base} creada`)

// })
// con esta toca un try catch para el handler del error
