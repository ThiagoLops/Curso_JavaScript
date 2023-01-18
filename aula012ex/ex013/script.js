function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.<br>`
if(hora >= 0 && hora < 12){
    //Bom dia
    img.src = 'manha.png'
    window.document.body.style.background = '#FFDEAD'
    msg.innerHTML = 'Bom dia!'
}else if(hora >= 12 && hora < 18 ){
    //boa tarde    
    img.src = 'tarde.png'
    document.body.style.background = '#D2691E'
    msg.innerHTML += '<p><strong>Boa tarde!</strong></p>'
}else{
    //boa noite
    img.src = 'noite.png'
    document.body.style.background = '#1C1C1C'
    msg.innerHTML = 'Boa noite'
}
}