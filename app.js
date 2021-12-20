


// const fs = require('fs');
const { number, boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
// console.clear()

// const { colors } = require('./node_modules/colors');


// const [ , , arg3 = 5] = process.argv

// const [ , base] = arg3.split('=');

// console.log(base);




const base = argv.base;
const listar = argv.listar
const hasta = argv.hasta



crearArchivo(base,hasta,listar)
    .then( nombredelarchivo => console.log(nombredelarchivo) )
    .catch(err => console.log(err))