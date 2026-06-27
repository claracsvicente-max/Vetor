import PromptSync from "prompt-sync"
let ler = PromptSync()

console.log(`Vamos jogar bingo!
escolha um número entre 1 e 50`)
let n1 = Number(ler())

let vetor = []
vetor.push(44)
vetor.push(29)
vetor.push(3)
vetor.push(30)
vetor.push(18)

let texto = ''

if(vetor.includes(n1)){
    texto = 'Você escolheu o número certo!'
}

else{
    texto = 'Você escolhu o número errado...'
}

console.log(texto)

console.log(`deseja continuar:
SIM
NÃO`)
let t = ler()

let texto2 = ''

if(t == 'sim'){
    console.log(`Escolha outro número entre 1 e 50 (Sem ser o que você escolheu antes)`)
    let n2 = Number(ler())

    if(vetor.includes(n2) && n2 != n1){
        texto2 = 'Parabéns, você acertou!'
    }

    else{
        texto2 = 'Que pena, você errou...'
    }
}

else{
    texto2 = 'Até a próxima!'
}

console.log(`${texto2}
Os números do nosso bingo eram ${vetor}`)