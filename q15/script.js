let obj1 = {
    name: "Ram",
    power: 2500,
    yuga: "tetra"
};
let obj2 = {
    name: "krishna",
    power: 2325,
    yuga: "Dwapar"
};

let power = (obj1, obj2) => {
    let power1 = 0;
    let power2 = 0;
    for (let i = 0; i < obj1.name.length; i++) {
        power1 += 35;
    }
    power1 += obj1.power;
    for (let i = 0; i < obj2.name.length; i++) {
        power2 += 35;
    }
    power2 += obj2.power;

    if(power1>power2){
        console.log(power1);
    }
    else{
     console.log(power2);
    }



}

power(obj1,obj2)

