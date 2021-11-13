let password=document.querySelector("input");
let button=document.querySelector("button");
let p=document.querySelector("p");


password.addEventListener("change",()=>{
    if(password.value.length<10){
        button.disabled=true;
        p.innerText="error";
        password.style.backgroundColor="red";
    }
    else{
        button.disabled=false;
        password.style.backgroundColor="green";
        p.innerText="success";

    }
})
