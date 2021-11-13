let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let h1=document.querySelector("h1");
let btn3 = document.querySelector(".btn-3");
let p=document.querySelector("p");

let size;
btn1.addEventListener("click",()=>{
    size=5;
    h1.style.border=`${size}px solid`
})
btn2.addEventListener("click",()=>{
    size=10;
    h1.style.border=`${size}px solid`
})


btn3.addEventListener("click",()=>{
    fetch("https://quick-access-api.desaihetav.repl.co/").then(res=>res.json()).then(json=>{
         p.innerText=`${json.message}`
    })
})
