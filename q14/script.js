let obj1={
    name:"Ram",
    power:25,
    yuga:"Treta"
};

let obj2={
    name:"Krishna",
    power:31,
    yuga:"Dwapar"
};

let higherPower=(obj1,obj2)=>{
  if(obj1.power>obj2.power){
      console.log(`${obj1.name} has more power`);
  }
  else if(obj2.power>obj1.power){
      console.log(`${obj2.name} has more power`)
  }
  else{
      console.log("They have equal power");
  }
}
higherPower(obj1,obj2);
