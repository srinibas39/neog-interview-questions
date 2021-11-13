let input1=document.querySelector("#in-1");
let input2=document.querySelector("#in-2");
let button=document.querySelector("button");
let p=document.querySelector("p");

button.addEventListener("click",()=>{
    
    if(input1.value>input2.value){
      p.innerText=`input 1 is greater`;
    }
    else if(input1.value<input2.value){
        p.innerText=`input 2 is greater`;
    }
    else if(input1.value===input2.value){
        p.innerText=`Both are equal`
    }
})
