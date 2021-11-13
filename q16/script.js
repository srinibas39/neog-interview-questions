const readLineSync=require("readline-sync");
let myApp=(news,source)=>{
    if(source=="whatsapp"|| source=="facebook"){
        console.log("Fake news");
    }
    else{
        console.log(news);
    }
}


for(let i=0;i<5;i++){
    let news=readLineSync.question("What is the news \n").toLowerCase();
    let source=readLineSync.question("Tell me your source \n").toLowerCase();
    myApp(news,source);

}

