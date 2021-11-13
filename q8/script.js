let button=document.querySelector("button");
let p=document.querySelector("p");

button.addEventListener("click",()=>{

    if(button.innerText=="loaded"){
        
        p.style.display="none";
        button.innerText="load";
    }
    else{
        p.style.display="block";
        button.innerText="loaded"
    }


})