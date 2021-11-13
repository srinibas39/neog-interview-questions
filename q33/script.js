let inc=document.querySelector(".inc");
let dec=document.querySelector(".dec");

let p=document.querySelector("p");
let size=16;
p.style.fontSize=`${size}px`;
inc.addEventListener("click",()=>{
     size=size+4;
     p.style.fontSize=`${size}px`; 
     if(div5(size)){
         p.style.color="red";
     }
     else{
        p.style.color="black"
     }
})

dec.addEventListener("click",()=>{
    size=size-4;
    p.style.fontSize=`${size}px`; 
    if(div5(size)){
        p.style.color="red";
    }
    else{
        p.style.color="black"
     }

})

let div5=(num)=>{
   return num%5==0;
}