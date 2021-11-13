let button=document.querySelector("button");
let body=document.querySelector("body");

button.addEventListener("click",()=>{
    fetch(" https://randomuser.me/api/?results=10").then(res=>res.json()).then(json=>{
        for(let i=0;i<json.results.length;i++){
            let title=json.results[i].name.title;
            let first=json.results[i].name.first;
            let last=json.results[i].name.last;
            console.log(title,first,last)
            let a=json.results[i].dob.age;
            if(a>45){
                let p=document.createElement("p");
                p.innerText=`${title} ${first} ${last} ${a}`;
                body.appendChild(p);
                p.style.color="green"


            }
        }
    })
})