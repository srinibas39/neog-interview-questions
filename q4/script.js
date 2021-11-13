let input=document.querySelector("input");
let red=document.querySelector(".red");
let blue=document.querySelector(".blue");
let green=document.querySelector(".green");


let output=document.querySelector(".output");

red.addEventListener("click",()=>{
    output.style.color="red";
    output.innerText=`${input.value}`
})
green.addEventListener("click",()=>{
    output.style.color="green";
    output.innerText=`${input.value}`
})
blue.addEventListener("click",()=>{
    output.style.color="blue";
    output.innerText=`${input.value}`
})