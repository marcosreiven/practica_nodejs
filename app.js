const fs=require('fs');
console.clear();
console.log('==============');
console.log('  Tabla del 5');
console.log('==============');

const base=10;
let salida='';

for(let i=1; i<=10;i++)
{
     salida= salida + `${base } x ${ i } =  ${base*i}\n`;
}
console.log(salida);
/*fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    if(err) throw err;*/ 
    //o pero esto no catura errer se rendria qu e hacer con trycatch
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`tabla-${base}.txt  --  creado`);

