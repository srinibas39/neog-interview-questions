let font1=document.querySelector(".font-1");
let font2=document.querySelector(".font-2");
let font3=document.querySelector(".font-3");
let p=document.querySelector("p");

font1.addEventListener("click",()=>{
    p.style.fontFamily='Roboto', `sans-serif`;
})
font2.addEventListener("click",()=>{
    p.style.fontFamily='Shalimar', 'cursive';
    
})
font3.addEventListener("click",()=>{
    p.style.fontFamily='Yuji Boku', 'serif';
})

