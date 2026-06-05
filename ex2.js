import prompt from 'prompt-sync'
let ler = prompt()

console.log('escreva vários nomes (fim para parar)')
let vetor = []
let nomes = ler()

while(nomes != 'fim'){
    vetor.push(nomes)
    nomes = ler()
}

console.log(`você esreveu os seguintes nomes
${vetor}`)