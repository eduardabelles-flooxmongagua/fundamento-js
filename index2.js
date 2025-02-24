//example switch

let cor="verde";

switch(cor){
   case "verde":
   console.log("siga");
   break;

   case "amarelo":
   console.log("atenção");
   break;

   case "vermelho":
   console.log("vermelho");
   break;

   default:
    console.log("não sei");

}

//Multiplication Table of 5
let n=5;
for(let i=0; i<=10;i++){
    console.log(`${i} X ${n} = ${i*n}`);
    //console.log(i+"X"+n+"="+(i*n));
}

//fuctions

function soma(x1,x2){
return x1+x2;
}
let resultado=soma(1,2);
console.log(resultado);

/*function calc(x1,x2,operator){
    return eval(`${x1} ${operator} ${x2}`);
    }
    let result=calc(6,2,"+");
    console.log("Soma="+result);
*/
    //anonymous fuction
    console.log(function (x1,x2,operator){
        return eval(`${x1} ${operator} ${x2}`);
    }(8,2,"+"));
        
//Arrow function
let calc = (v1,v2,operator)=>{

    return eval(`${v1} ${operator} ${v2}`);

    }
    let result=calc(6,2,"+");
    console.log("Soma="+result);


    