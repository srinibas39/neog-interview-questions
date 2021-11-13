let DOB=document.querySelector("input");
let button=document.querySelector("button")
let p=document.querySelector("p");
button.addEventListener("click",()=>{
   let DOBV=DOB.value;
   let year=DOB.value.split("-")[0];
   let age=2021-year;
   console.log(age);

   if(age<0){
       p.innerText=`Enter the correct date`;
   }
   if(age>=18){
       p.innerText=`Driving is possible`;
   }
   else if(age>=0 && age<18){
       p.innerText=`Driving is not possible`;
   }
})
