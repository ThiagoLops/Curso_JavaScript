function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifque os dados e tente novamente!')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')    //Adicionando atributo pelo javaS
       if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                //nene
               img.setAttribute('src', 'CriancaH.jpg')
            } else if (idade < 23){
               //jovem
               img.setAttribute('src', 'JovemH.jpg')
            } else if (idade < 50){
               //adulto
               img.setAttribute('src', 'AldultoH.jpg')
            } else if (idade < 100){
               //idoso
               img.setAttribute('src', 'vvelho.jpg')
            } else {
               //morto
               img.setAttribute('src', 'Caveira.jpg')
            }
           
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //nene
                img.setAttribute('src', 'criancaM.jpg')
            } else if (idade < 23){
                //jovem
                img.setAttribute('src', 'jovemmm.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulherA.jpg')
            } else if (idade < 100){
               //idoso
               img.setAttribute('src', 'velho.jpg')
            } else {
                //morto
                img.setAttribute('src', 'Caveira.jpg')
            }
        }
        res.style.textAlign = 'center'
       res.innerHTML = `<p>Detectamos ${genero} de ${idade} anos.</p>`
       img.style.borderRadius = '50pt'
       img.style.textAlign = 'center'
       res.appendChild(img)
    }
}