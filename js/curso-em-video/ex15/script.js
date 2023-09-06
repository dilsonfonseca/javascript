function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('textano')
    let res = document.getElementById('res')
    if (fano.value == 0 || Number(fano.value > ano)){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/baby-1-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/teen-1-m.png')
            } else if (idade < 58) {
                img.setAttribute('src', 'img/adult-1-m.png') 
            } else {
                img.setAttribute('src', 'img/old-1-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/baby-1-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/teen-1-f.png')
            } else if (idade < 58) {
                img.setAttribute('src', 'img/adult-1-f.png') 
            } else {
                img.setAttribute('src', 'img/old-1-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}