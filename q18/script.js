let input=document.querySelector("input");
let button=document.querySelector("button");
let p=document.querySelector("p");

button.addEventListener("click",()=>{
    let inputValue=input.value;
    let ctr=inputValue.length;
    let product=1;
     for(let i=0;i<ctr;i++){
          product*=10;
     }
     if((inputValue**2)%product==inputValue){
         p.innerText=`Automorphic`;
     }
     else{
         p.innerText=`Not Automorphic`;
     }

})