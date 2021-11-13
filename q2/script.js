let inc=document.querySelector(".inc");
let input=document.querySelector("input");
let output=document.querySelector(".output")
let dec=document.querySelector(".dec");
let size;

input.addEventListener("change",()=>{
    size=32;
    output.style.fontSize=`${size}px`
    output.innerText=`${input.value}`
})

inc.addEventListener("click",()=>{
    size+=16;
    output.style.fontSize=`${size}px`
})

dec.addEventListener("click",()=>{

    if(size>16){
        size-=16;

    }
    output.style.fontSize=`${size}px`
})