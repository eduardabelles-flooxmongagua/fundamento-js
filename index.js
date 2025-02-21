console.log('Olá mundo');
alert("Hello World!");
// This is a short comment
/* This is a long comment */

var olaMundo="Olá Mundo!!";
console.log(olaMundo);

//variable types var, let(scope), const(constant)

//= assignment
let a=10;
const b="10";
//console.log(a=b); 
//console.log(a==b && typeof a ==='string');
console.log(a==b || typeof a ==='string');

//== comparasion
let c="20";
const d=20;
console.log(c==d);

//=== value and data type comparison
let e="20";
const f=20;
console.log(c===d);

//!= different
let g="20";
const h=20;
console.log(c!=d);

//If & else
let cor = "amarelo";
//let cor ="vermelho";
//let cor ="verde";

if(cor==="vermelho"){
    console.log("siga");
}
else if(cor==="amarelo"){
    console.log("atenção");
}
else{
    console.log("pare");
}


