let fetchB=document.querySelector("button");

fetchB.addEventListener("click",()=>{
    fetch(`https://mystery-api.kushanksriraj.repl.co/get`).then(res=>{
        if(res.status===404){
                console.log(res.statusText)
        }
        else if(res.status===401){
            console.log(res.statusText)
        }
        else if(res.status===200){
            console.log(res.statusText)
        }
    })
})