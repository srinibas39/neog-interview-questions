let button=document.querySelector("button");
let p=document.querySelector("p");
button.addEventListener("click",()=>{
    fetch("https://mock-practice.prakhar10v.repl.co/items").then(res=>res.json()).then(json=>{
      console.log(json);
        let max=json[0].price;
        let item;
        for(let i=0;i<json.length;i++){

            if(json[i].price>max){
              max=json[i].price;
              item=json[i].item;
            }
          
        }
      p.innerText=`${item}  Rs${max}`

    })
})