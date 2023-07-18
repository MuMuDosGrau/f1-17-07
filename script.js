const form = document.querySelector('form1')
const confirmaResposta = document.querySelector('confirmaResposta')
var pergunta = document.getElementById('pergunta')
var alternativaA = document.getElementById('alternativaA')
var alternativaB = document.getElementById('alternativaB')
var alternativaC = document.getElementById('alternativaC')

const perguntas = [
    ['Quem foi o campeão de 1988?', 'Ayrton Senna', 'Alain Prost', 'Nigel Mansell']
]

alternativaA.textContent = perguntas[0][1]
alternativaB.textContent = perguntas[0][2]
alternativaC.textContent = perguntas[0][3]

form1.onsubmit = (evento) => {
    pergunta.textContent = perguntas[0][0]

    const inputs = new FormData(evento.target)
    const resposta = inputs.get('resposta')

    for (let i = 0; i < perguntas.length; i++) {
        if (resposta == perguntas[0][1]) {
            alert("acertou")
        } else {
            alert("errou")
        }
    }

    return false
}