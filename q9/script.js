let button =document.querySelector("button");
let output=document.querySelector("div");


button.addEventListener("click",()=>{

    
        let URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
        fetch(URL).then(res => res.json()).then(json => {
            output.innerText=`${json.contents.translation}`;
        }).catch(error=>{
            alert("there is some error in the server");
        })
    
})
