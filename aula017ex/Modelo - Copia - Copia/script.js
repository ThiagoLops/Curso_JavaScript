function adicionar(){       // função para salvar vetor
    let num = document.getElementById('num')
    let selc = document.getElementById('selnum')
    numero = Number(num.value)
    if(numero < 0 || numero > 100){    //verificar se está entre os valores digitados
        window.alert('[ERRO] APENAS ENTRE 0 e 100!') 
    }else if(numero == ""){  //verficar caixa em branco
        window.alert('[ERRO] Verifique se digitou corretamente.')
    }else if(salvos.indexOf(numero) != -1){ //verificar numeros já digitados
        window.alert('[ERRO] Numero já digitado.')
    } else {
        salvos.push(numero)
        //criando option para uma select
        let item = document.createElement('option') 
        //adicionando texto na option
        item.text = `Valor ${numero} adicionado.`
        //imprimindo na tela
        selc.appendChild(item)
        //limpando texto caso outro valor foi adicionado
        res.innerHTML = '' 
    }
   num.value = '' //limpando a caixa de texto 
   num.focus()  //foco na barra de digitação
}
var salvos = []

function finalizar(){
    if(salvos.length != 0){
        let res = document.getElementById('res')
        res.innerHTML = `<p>Ao todo, temos ${salvos.length} numeros cadastrados.</p>`
        salvos.sort()
        let maiorN = salvos[0]
        for(let i in salvos){
            if(salvos[i] > maiorN){
                maiorN = salvos[i]
            }
        }
        res.innerHTML += `<p> O maior valor encontrado foi ${maiorN}</p>`
        res.innerHTML += `<p> O menor valor encontrado foi ${salvos[0]} </p>`
        let soma = 0
        for(let i = 0; i < salvos.length ;i++){ //percorendo e somando valores do vetor
            soma += salvos[i] 
        }
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `A média dos valores digitados é ${soma / salvos.length}`
        
    }else {
        window.alert('[ERRO] Digite Alguns valores.')
    }
}