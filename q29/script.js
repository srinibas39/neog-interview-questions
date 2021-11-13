let input=document.querySelector("input");
let button=document.querySelector("button");

let p=document.querySelector("p");

button.addEventListener("click",()=>{
    let inputV=input.value;
    let reverse=inputV.split("").reverse().join("");
     
     p.innerText=`${reverse}`;

})