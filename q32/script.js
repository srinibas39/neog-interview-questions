let button=document.querySelector("button");
let p=document.querySelector("p");

button.addEventListener("click",()=>{
    fetch("https://randomsuser.me/api/").then(res=>res.json()).then(json=>{
        console.log(json);
    }).catch(err=>{
        console.log(err.name);
        p.innerText=`${err.name}`;
    })
})