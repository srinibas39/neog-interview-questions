let input=document.querySelector("input");
let button=document.querySelector("button");
let p=document.querySelector("p");
button.addEventListener("click",()=>{
    let no=Math.floor(Math.random()*10);
    if(no==input.value){
       p.innerText=`correct guess`;
    }
    else{
        p.innerText=`Incorrect guess`;  
    }
})