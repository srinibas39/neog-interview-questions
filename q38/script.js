let input = document.querySelector("input");
let click = document.querySelector(".click");
let dec = document.querySelector(".dec");
let p = document.querySelector("p");
let div = document.querySelector("div")

let n = Number(dec.innerText);
click.disabled=false;
input.addEventListener("keypress", () => {
    n = n - 1;
    dec.innerText = `${n}`;
    if(n<=15 && n>=0){
        dec.style.backgroundColor=`yellow`;
    }
    if(n<0){
        dec.style.backgroundColor=`red`;
        click.disabled=true;
    }
    if(n==0){
        click.disabled=true;
    }
})
click.addEventListener("click",()=>{
    div.innerText=`${input.value}`
})
