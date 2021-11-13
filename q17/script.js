let button = document.querySelector("button");
let ul=document.querySelector("ul");

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/todos").
    then(res => res.json()).
    then(json=>{
        for(let i=0;i<json.length;i++){
            // console.log(json[i].title);

          let li=document.createElement("li");
          li.innerHTML=`${json[i].title}`;
          ul.appendChild(li);

            
        }
    })
})