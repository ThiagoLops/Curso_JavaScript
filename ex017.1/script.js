function Enviar(){
    
    var form = document.getElementById('form')
    var numero1 = document.getElementById('numero1')
    var num1 = Number(numero1.value)
    var numero2 = document.querySelector('input#numero2')
    var num2 = Number(numero2.value)
    var res = document.querySelector('div#res')
    var pas = document.getElementById('passo')
    var passo = Number(pas.value)

    if(num1 == "" || num2 == "" || passo == ""){
        window.alert('[ERRO] Verifique os numeros digitados e tente novamente!')
    } else{
        res.innerHTML += '🟠..🟡..🟢<BR>'
        if (num1 > num2) {
         // contagem regressiva  
          for(let i = num1; i > num2; i -= passo){

            res.innerHTML += ` 👉 ${i}  `
        }
        } else {
            //contagem crescente
            for(let i = num1; i < num2; i += passo){

                res.innerHTML += ` 👉 ${i}  `  
            
            }
        }
        res.innerHTML +=  ` 🏴 `
        form.reset();
    }
}
