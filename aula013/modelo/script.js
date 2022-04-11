function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var tano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(tano.value.length == 0 || tano.value > ano){
        window.alert('[ERRO]Verifique as informações e tente novamente')
    } else{
       var tsex = document.getElementsByName('radsex')
       var idade = ano - Number(tano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(tsex[0].checked){
           genero = 'um Homem'
           if(idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'bebe-menino.jpg')
           } else if (idade < 12){
                img.setAttribute('src', 'criança-menino.jpg')
           } else if(idade < 21){
                img.setAttribute('src', 'jovem-homem.jpg')
           } else if (idade < 50){
                img.setAttribute('src', 'adulto-homem.jpg')
           } else{
                img.setAttribute('src', 'idoso-homem.jpg')
           }
       } else if (tsex[1].checked){
           genero = 'uma Mulher'
           if(idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'bebe-menina.jpg')
           } else if (idade < 12){
                img.setAttribute('src', 'criança-menina.jpg')
           } else if(idade < 21){
                img.setAttribute('src', 'jovem-mulher.jpg')

           } else if (idade < 50){
                img.setAttribute('src', 'adulto-mulher.jpg')
           } else{
                img.setAttribute('src', 'idoso-mulher.jpg')
           }
       }
       res.style.textAlign = 'center'
       res.innerHTML = ` Detectamos ${genero} com ${idade} anos` 
       res.appendChild(img)
    }
}