let h1=document.querySelector(".h1");
let h2=document.querySelector(".h2");
let h3=document.querySelector(".h3");

let o1=document.querySelector("h1");
let o2=document.querySelector("h2")
let o3=document.querySelector("h3")

let input=document.querySelector("input");

h1.addEventListener("click",()=>{
  let inputValue=input.value;
  o1.innerText=`${inputValue}`;
})
h2.addEventListener("click",()=>{
    let inputValue=input.value;
    o2.innerText=`${inputValue}`;
  })
h3.addEventListener("click",()=>{
    let inputValue=input.value;
    o3.innerText=`${inputValue}`;
  })

  //you can use innerHTML