
const { demandOption } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar2');
const argv=require('./config/yargs');
const colors=require('colors');

console.clear();



//console.log(argv);

crearArchivo(argv.b, argv.l,argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err=>console.log(err));

//comando node app1.js --base=10    

 