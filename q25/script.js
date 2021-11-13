let name = document.querySelector(".name");
let password = document.querySelector(".password");

let button = document.querySelector("button");
let p = document.querySelector("p");



button.addEventListener("click", () => {
    let nameV = name.value;
    passwordV = password.value;

    if (passwordV.includes(nameV)) {
        p.innerText = `password cannot not contain name`;
    }
})

password.addEventListener("change", () => {
    if (password.value.length< 10) {
        button.disabled = true;
    }
    else {
        button.disabled = false;
    }
})