let inputA = document.getElementById('inputA');
let inputB = document.getElementById('inputB');
let inputX = document.getElementById('inputX');
let para = document.querySelector('#mensagem');
let btn = document.querySelector('button');


btn.addEventListener('click', function(){

let A = inputA.value;
let B = inputB.value;
let X = inputX.value;
let C ;
 
 if(!(X > 5)){
 	C = parseInt(A) + parseInt(B);
 	para.textContent = C;

 }else{
 	C = parseInt(A) - parseInt(B)
 	para.textContent =  C;
 }
})
