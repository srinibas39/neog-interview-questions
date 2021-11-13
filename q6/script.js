const readLineSync=require("readline-sync");

let index=0;

let highestScore=(score)=>{
    let max=score[0];
    for(let i=0;i<score.length;i++){
          if(score[i]>max){
              max=score[i];
              index=i;
          }
    }
    return max;
}
let name=(names)=>{
     return names[index];
}

let avg=(score)=>{
  let avg=0;
  let sum=0 
  for(let i=0;i<score.length;i++){
      sum+=score[i];
  }
  avg=sum/score.length;
  return avg;
}

let myApp=()=>{
    let score=[];
    let names=[];

    for(let i=0;i<5;i++){
        let name=readLineSync.question("What is your name ?"+"\n");
        let UnitTestMarks=readLineSync.question("Enter your unit test marks"+"\n");
        let preFinalMarks=readLineSync.question("Enter your preFinalMarks"+"\n");
        let FinalMarks=readLineSync.question("Enter your final marks "+"\n");
    
        let TotalMarks=Number(UnitTestMarks)+Number(preFinalMarks)+Number(FinalMarks);
        score.push(TotalMarks);
        names.push(name);

    }
    console.log(names);

    let highest=highestScore(score);
    let average=avg(score);
    let n=name(names);

    console.log("The highest marks is "+highest+" by"+n+" and the average marks is "+average);

     
}
myApp();