function Calcular(){
    var numero = document.getElementById('numero')
    var res = document.getElementById('res')
    if(Number(numero.value) == ''){
        window.alert('[ERRO] Verifique se digitou corretamente!')
    } else {
       var vezes = 100
       res.innerHTML = `<p>Taboada de ${vezes}x do numero ${Number(numero.value)}.</p> `
       for (let i = 0; i <= vezes; i++) {
           var soma = i * Number(numero.value)
           res.innerHTML += `<p>${i} X ${numero.value} = ${soma}</p>`
           
       } 
    }

}