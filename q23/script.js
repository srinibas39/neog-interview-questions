let input=document.querySelector("input");
let log=document.querySelector(".log");
let warn=document.querySelector(".warn");
let error=document.querySelector(".error");
let p=document.querySelector("p");

log.addEventListener("click",()=>{

  p.style.color="black"
   p.innerText=`${input.value}`
})
warn.addEventListener("click",()=>{

    p.style.color="blue"
   p.innerText=`${input.value}`
})
error.addEventListener("click",()=>{

    p.style.color="red"
   p.innerText=`${input.value}`
})