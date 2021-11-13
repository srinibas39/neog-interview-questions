let name=document.querySelector(".name");
let button=document.querySelector(".fetch");

let output=document.querySelector(".output");
let validate=document.querySelector(".validate");

let otp=document.querySelector(".otp");

let output2=document.querySelector(".output-2");

let o;
button.addEventListener("click",()=>{
    
    let nameV=name.value;
    fetch(`https://otpgenerator.ishanjirety.repl.co/get-otp?name=${nameV}`).then(res=>res.json()).then(json=>{
        output.innerText=`${json.otp}`
         o=json.otp;
         
    })
})

validate.addEventListener("click",()=>{
       let otpV=otp.value
        let guess=String(o).split("-")[1];
        console.log(guess,o);
        if(String(otpV)==guess){
            output2.innerText=`success`
        }
        else{
            output2.innerText=`failure`
        }
    
})



