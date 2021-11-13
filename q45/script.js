let button=document.querySelector("button");
let div=document.querySelector("div");
button.addEventListener("click",()=>{
    fetch(" https://random.dog/woof.json?ref=apilist.fun ").then(res=>{
         return res.json();
    }).then(json=>{
        console.log(json.url);
        div.innerHTML=`<img src="${json.url}" >`
    })
})