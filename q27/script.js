let inc=document.querySelector(".btn-inc");
let dec=document.querySelector(".btn-dec");
let p=document.querySelector("p");

let num=Number(p.innerText);
inc.addEventListener("click",()=>{
     num++;
     p.innerText=`${num}`;
})

dec.addEventListener("click",()=>{

    if(num>0){
        
        num--;
        p.innerText=`${num}`;
    }
})
