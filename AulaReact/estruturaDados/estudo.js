const prompt = require('prompt-sync')();

let vetorVazio = []; 
for (let i = 0; i < 10; i++) {
    let entrada = Number(prompt(" "));

    if(entrada <= 0){
        vetorVazio.push(1); 
    }
    else{
       vetorVazio.push(entrada); 
    }

}

for (let i = 0; i < vetorVazio.length; i++) {
    console.log("X[" + i + "] = " + vetorVazio[i]);
}

