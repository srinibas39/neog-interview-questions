let input = document.querySelector("input");
let button = document.querySelector("button");


button.disabled = true;

input.addEventListener("keypress", (e) => {
    button.disabled = false;

    if(input.value.includes(" ")){
        button.disabled=true;
    }
    if (input.value.length > 5) {

        e.preventDefault();
        return false;
    }
    else {

        return true;
    }
})

