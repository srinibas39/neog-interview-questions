let num1=document.querySelector("#input-1");
let num2=document.querySelector("#input-2");
let add=document.querySelector(".add");
let mul=document.querySelector(".mul");
let sub=document.querySelector(".sub");
let div=document.querySelector(".div");
let output=document.querySelector(".output");


add.addEventListener("click",(e)=>{
    
    let num1Value=Number(num1.value);
    let num2Value=Number(num2.value);
    output.innerText=`The sum of two nos is ${num1Value+num2Value}`;


})
mul.addEventListener("click",(e)=>{
    
    let num1Value=Number(num1.value);
    let num2Value=Number(num2.value);
    output.innerText=`The sum of two nos is ${num1Value*num2Value}`;


})
sub.addEventListener("click",(e)=>{
    
    let num1Value=Number(num1.value);
    let num2Value=Number(num2.value);
    output.innerText=`The sum of two nos is ${Math.abs(num1Value-num2Value)}`;


})
div.addEventListener("click",(e)=>{
    
    let num1Value=Number(num1.value);
    let num2Value=Number(num2.value);
    output.innerText=`The sum of two nos is ${num1Value/num2Value}`;


})