let input1=document.querySelector("#num1");
let input2=document.querySelector("#num2");
let op=document.querySelector("#op");
let p=document.querySelector("p")
let input1v;
let input2v;
let opV;
input1.addEventListener("change",()=>{
     input1v=Number(input1.value)
})
input2.addEventListener("change",()=>{
    input2v=Number(input2.value)
})
op.addEventListener("change",()=>{
    opV=op.value;
    if(opV=="+"){
        p.innerText=`${input1v+input2v}`
    }
    else if(opV=="-"){
        p.innerText=`${input1v-input2v}`
    }
    else if(opV=="*"){
        p.innerText=`${input1v*input2v}`
    }
    else if(opV=="/"){
        p.innerText=`${input1v/input2v}`
    }
    else{
        p.innerText=`error` 
    }
})

