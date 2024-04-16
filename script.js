let investimento = document.querySelector("#investido")
let antes = document.querySelector("#antes")
let hoje = document.querySelector("#hoje")

function calcular() {

    let simular = document.querySelector("#simulacao")

    let valorinvestimento = Number(investimento.value)
    let valorantes = Number(antes.value)
    let valorhoje = Number(hoje.value)

    let calculo = (valorantes/valorhoje)
    let percentual = ((1 - calculo)*100).toFixed(1)

    let ganhoshoje = (valorinvestimento * (percentual/100))

    simular.innerHTML = `<h2>Ganhei R$ <span>${(ganhoshoje + valorinvestimento).toFixed(2)}</span>, com um percentual de <span>${percentual}%</span> </h2>`
}
