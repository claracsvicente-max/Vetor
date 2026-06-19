import PromptSync from "prompt-sync"
const ler = PromptSync()

console.log('informe quantos números você quer escrever')
let n = Number(ler())

let vetor = []

for(let cont = 1; cont <= n; cont++){
    let n1 = Number(ler('Adicione um número: '))
    vetor.push(n1)
}

console.log(`${vetor.reverse()}`)