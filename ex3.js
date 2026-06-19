import prompt from "prompt-sync"
const ler = prompt()

console.log('quantos números você deseja escrever')
let n = Number(ler())

let vetor = []

for(let cont = 1; cont <= n; cont++){
    let n1 = Number(ler('Adicione um número: '))
    vetor.push(n1)
}

console.log(`Você digitou os seguintes números
${vetor}`)