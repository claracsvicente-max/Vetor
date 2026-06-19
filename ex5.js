import PromptSync from "prompt-sync";
const ler = PromptSync()

console.log('qual tabuada o usuario deseja aprender hoje')
let t = Number(ler())

let vetor = []

for(let cont = 1; cont <= 10; cont++){
    let tab = cont * t
    vetor.push(tab)
}

console.log(`${vetor}`)