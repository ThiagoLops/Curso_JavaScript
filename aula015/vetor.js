let num = [2221,504, 2, 3, 3, 5]
for (let i = 0; i < num.length; i++){
        console.log(`O valor da posição ${i} é ${num[i]}. `)
}
num.sort()
for(let i in num){
    console.log(`O valor  ${i} é ${num[i]}. `)
}
let busc = num.indexOf(1) //busca dentro do vetor
console.log(busc)