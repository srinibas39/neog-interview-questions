let input=document.querySelector("input");
let button=document.querySelector("button");
let color=document.querySelector(".color");
let p=document.querySelector("p")

button.addEventListener("click",()=>{
  let inputV=input.value;
    let colorV=color.value;
    p.innerText=`${inputV}`;
    p.style.color=`${colorV}`
})