import prompt from 'prompt-sync'
let ler = prompt()

console.log('insira vários números (o último tem que ser 0)')
let vetor = []
let n = Number(ler())

while(n != 0){
    vetor.push(n)
    n = Number(ler())
}

console.log(`os números que você inserio foram
${vetor}`)