
const { demandOption } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar1');
const argv = require('yargs')
               .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption: true
               })
               .check((argv,options)=>{
                    //console.log('yargs ', argv )
                    if(isNaN(argv.b)){
                         throw 'La base tiene que ser un numero'
                    }
                    return true;
               })
               .argv;
console.clear();


//console.log(process.argv);
console.log(argv);
//console.log('base: yargs', argv.base);
//const base=50;

//console.log(process.argv);
/* 
const [ , ,arg3='base=5']=process.argv;
const [ , base=5]=arg3.split('=');
*/
//console.log(base);


crearArchivo(argv.b)
    .then(nombreArchivo=>console.log(nombreArchivo, 'Creado'))
    .catch(err=>console.log(err));

//comando node app1.js --base=10    

