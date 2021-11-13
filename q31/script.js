let button=document.querySelector("button");
let body=document.querySelector("body");

button.addEventListener("click",()=>{
    fetch("https://randomuser.me/api/?results=10").then(res=>res.json()).then(json=>{
        
    for(let i=0;i<json.results.length;i++){  
         

        let title=json.results[i].name.title;
        let first=json.results[i].name.first;
        let last=json.results[i].name.last;
        let  gender=json.results[i].gender;
    
        if(gender=="female"){
            let p=document.createElement("p");
            p.innerText=`${title} ${first} ${last}`
            body.appendChild(p);
            p.style.color="pink"


        }
        
    }
    })
})