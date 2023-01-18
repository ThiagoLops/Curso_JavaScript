function parimp(n){
    if(n%2 != 0){
        return 'par'
    } else {
        return 'impar'
    }
}
for(let i = 0; i < 4; i++){

    console.log('numero '+ i + ' é ' + parimp(i+5))
}