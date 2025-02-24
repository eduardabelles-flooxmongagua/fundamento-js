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
/*let cor = "amarelo";
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
}*/

//DOM
window.addEventListener('focus',event=>{
    console.log("Focus");
});

document.addEventListener('click',event=>{
    console.log("CLick")
});

//Date
//let agora=Date.now();
//console.log(agora);

//let agora=new Date();
//console.log(agora);

let agora = new Date();
console.log(agora.toLocaleDateString("pt-BR"));

let carros = ["palio 98", "toro", "uno", 10,new Date,true, function(){}];

//console. log(carros[0]); 

carros.forEach(function(value,index){
    console.log(index,value);
});

//Class and object-oriented programming

//Class
let celular=function(){

    this.corCelular="prata";

    this.ligar=function(){

        console.log("Uma ligação");
        
        return "Ligando"
    }
}
let objeto=new celular()

//Construtor function
    console.log(objeto.ligar());

    class celular1{
        constructor(){
     
         this.corCelular1="Dourado";
        
        };
        
        ligar1(){
         console.log("Uma ligação1");   
         return "Ligando1";
         
        } 
     }
     let obj=new celular1();
     console.log(obj.ligar1());
     
