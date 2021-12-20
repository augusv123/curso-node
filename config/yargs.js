const argv = require('yargs').option( 'b' , {
    alias : 'base',
    type : 'number',
    demandOption : true,
    description : 'es el numero por el cual se va a multiplicar 10 veces'

    })
    .option( 'l' , {
        alias : 'listar',
        type : 'boolean',
        description : 'Si es true se muestra la tabla entera de multiplicacion'

        })
        .option( 'h' , {
            alias : 'hasta',
            type : 'number',
            description : 'Limite hasta donde se multiplica la table'
    
            })
        .check( (argv , options ) => {
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un numero';
            }
            return true;

        })
        .argv
;

module.exports = argv;
