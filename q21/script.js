// "Tanvi" - then show, "She is the best CEO ever!"
// "Tanay" - then show, "He is our FUNNY mentor!"
// "Swapnil" - then show, "He helps us CONQUER jobs!"
// "Akanksha" - then show, "She is our CHEERFUL Interviewer!"

let tanay=document.querySelector(".tanay");
let tanvi=document.querySelector(".tanvi");
let swapnil=document.querySelector(".swapnil");
let Akanksha=document.querySelector(".akanksha");
let body=document.querySelector("body")

tanay.addEventListener("click",()=>{
   let p=document.createElement("p");
   console.log("nsbdv")
   p.innerText=`He is our FUNNY mentor!`;

   body.appendChild(p);
})
tanvi.addEventListener("click",()=>{
    let p=document.createElement("p");
    p.innerText=`She is the best CEO ever!`;
 
    body.appendChild(p);
 })
 swapnil.addEventListener("click",()=>{
    let p=document.createElement("p");
    p.innerText=`He helps us CONQUER jobs!`;
 
    body.appendChild(p);
 })
 Akanksha.addEventListener("click",()=>{
    let p=document.createElement("p");
    p.innerText=`She is our CHEERFUL Interviewer!`;
 
    body.appendChild(p);
 })