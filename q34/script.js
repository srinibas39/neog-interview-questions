let button=document.querySelector("button");
let body=document.querySelector("body");
button.addEventListener("click",()=>{

    if(button.innerText=="dark"){

        body.style.backgroundColor="grey";
        button.innerText=`light`;
    }
    else{
        body.style.backgroundColor="white";
        button.innerText=`dark`;
    }
})