let cp=document.querySelector(".cost-price");
let sp=document.querySelector(".selling-price");
let button=document.querySelector("button");
let p=document.querySelector("p");
let body=document.querySelector("body");

button.addEventListener("click",()=>{
    let cpValue=cp.value;
    let spValue=sp.value;
    if(cpValue!="" && spValue!=""){

        if(cpValue>spValue){
            let loss=cpValue-spValue;
            p.innerText=`loss ${loss}`;
        }
        else if(cpValue==spValue){
            p.innerText=`Neither loss nor profit`
        }
        else{
    
            let profit=spValue-cpValue;
            p.innerText=`profit ${profit}`
    
        }
    }

    
})
