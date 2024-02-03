const argv = require("yargs")
                .options({
                    
                    "b":{
                        alias: "base",
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    "l":{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Decide si mostrar la tabla o no'

                        
                    },
                    "h":{
                        alias: 'limite',
                        type: 'number',
                        describe: "Es el limite de la multiplicacion"
                    }
            })
                .check((argv,options) => {
                    if( isNaN( argv.base)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true
                })
                .argv

module.exports = argv