let input = document.querySelector("input");
let p = document.querySelector("p");
let button = document.querySelector("button");

button.addEventListener("click", () => {
    let inputV = input.value;
    let arr = inputV.split(" ");
    let count = arr[0].length;
    let word;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= count) {
            count = arr[i].length;
            word=arr[i];
        }
    }
    p.innerText=`${word}`;
    p.style.color="blue";
})
