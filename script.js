function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                //crinça
                img.setAttribute('src', 'imagem/crianca-masc.jpg')
                genero = 'uma criança'

            } else if (idade <=17){
                //jovem
                img.setAttribute('src', 'imagem/adolecente-masc.jpg')
                genero = 'um adolecente'

            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'imagem/homem.jpg')
                genero = 'um homem'

            } else {
                //idoso
                img.setAttribute('src', 'imagem/homem-idoso.jpg')
                genero = 'um idoso'

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
             if (idade >= 0 && idade <= 12) {
                //crinça
                img.setAttribute('src', 'imagem/crianca-femin.jpg')
                genero = 'uma criança'

            } else if (idade <=17){
                //jovem
                img.setAttribute('src', 'imagem/adolecente-femin.jpg')
                genero = 'uma adolecente'

            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'imagem/mulher.jpg')
                genero = 'uma mulher'

            } else {
                //idoso
                img.setAttribute('src', 'imagem/mulher-idosa.jpg')
                genero = 'uma idosa'
            }
        }
        res.innerHTML = `Você é ${genero} de ${idade} anos de idade.`
        res.appendChild(img)
    }
}
