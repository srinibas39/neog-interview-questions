let button=document.querySelector("button");
let p=document.querySelector("p");

button.addEventListener("click",()=>{
    fetch("https://unitube-server.herokuapp.com/playlists").then(res=>res.json()).then(json=>{
       p.innerText=`${json.message.toUpperCase()}`;
    })
    .catch((err)=>{
        alert(err);
    })
})