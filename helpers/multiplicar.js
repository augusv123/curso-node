
const fs = require('fs');

var colors = require('colors');
 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: ['blue','underline'],
  error: 'red'
});

const crearArchivo = async (base = 5 , hasta = 10, listar = false) => {
    
    let salida =  '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} * ${index} = ${base * index} \n`;
            
        }

        if(listar){

            console.log(salida.silly);
        }
    // fs.writeFile(`tabladel${base}.txt`,salida , (err) => {
    //     if(err) throw err;
    //     console.log(`se creo la tabla del $`);
    // })
    try {
        
        fs.writeFileSync(`./salida/tabladel${base}.txt`,salida );
        return   `tabladel${base}`;
    } catch (error) {
        throw error;
    }

    
}




module.exports = {
        crearArchivo
}