function Enviar(){
    var numero1 = document.getElementById('numero1')
    var num1 = Number(numero1.value)
    var numero2 = document.querySelector('input#numero2')
    var num2 = Number(numero2.value)
    var res = document.querySelector('div#res')
    if(num1 == "" || num2 == ""){
        window.alert('[ERRO] Verifique os numeros digitados e tente novamente!')
    } else{
        if (num1 > num2) {
          var ex = num2
          num2 = num1
          num1 = ex  
        }
        res.innerHTML += '🟠..🟡..🟢<BR>'
        for(let i = num1; i < num2; i++){
            if(i % 2 != 0){
            res.innerHTML += ` 👉 ${i}  `
            }
            
        }res.innerHTML +=  ` 🏴 `
        
    }
}