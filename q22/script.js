let YJHD = document.querySelector("button");
let ZNMD = document.querySelector(".ZNMD");
let p=document.querySelector(".output")
YJHD.addEventListener("click", () => {
     

     myApp(YJHD.innerText);
    
    
})
ZNMD.addEventListener("click", () => {
    myApp(ZNMD.innerText);
})


let myApp = (movie) => {
    fetch(`https://mock-practice.prakhar10v.repl.co/bollywood?name=${movie}`).
    then(res=>res.json()).
    then(json=>{
        p.innerText=`${json.message}`;
    })
   
}
