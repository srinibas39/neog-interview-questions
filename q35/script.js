let button = document.querySelector("button");
let p = document.querySelector("p")
button.addEventListener("click", () => {
    let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  
      let idx=Math.floor(Math.random()*10);
      p.innerText=`${arr[idx]}`;

})