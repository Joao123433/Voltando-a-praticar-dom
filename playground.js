const elementoUm = document.querySelector("#um")
const elementoDois = document.querySelector("#dois")
const elementoTres = document.querySelector("#tres")
const elementoQuatro = document.querySelector("#quatro")
const elementoCinco = document.querySelector("#cinco")
const submit = document.querySelector("#submit")

valor = 0

function iniciar() {
    elementoUm.addEventListener("click", function() {
        elementoUm.style.backgroundColor = "#FC7614"
        elementoDois.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        elementoTres.style.backgroundColor = "#292942"
        elementoQuatro.style.backgroundColor = "#292942"
        elementoCinco.style.backgroundColor = "#292942"

        valor = Number(document.querySelector("#um").value)

    })

    elementoDois.addEventListener("click", function() {
        elementoUm.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        elementoDois.style.backgroundColor = "#FC7614"
        elementoTres.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        elementoQuatro.style.backgroundColor = "#292942"
        elementoCinco.style.backgroundColor = "#292942"

        valor = Number(document.querySelector("#dois").value)
    })

    elementoTres.addEventListener("click", function() {
        elementoUm.style.backgroundColor = "#292942"
        elementoDois.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        elementoTres.style.backgroundColor = "#FC7614"
        elementoQuatro.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        elementoCinco.style.backgroundColor = "#292942"

        valor = Number(document.querySelector("#tres").value)
    })

    elementoQuatro.addEventListener("click", function() {
        elementoUm.style.backgroundColor = "#292942"
        elementoDois.style.backgroundColor = "#292942"
        elementoTres.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        elementoQuatro.style.backgroundColor = "#FC7614"
        elementoCinco.style.backgroundColor = "rgba(255, 255, 255, 0.507)" 

        valor = Number(document.querySelector("#quatro").value)
    })

    elementoCinco.addEventListener("click", function() {
        elementoUm.style.backgroundColor = "#292942"
        elementoDois.style.backgroundColor = "#292942"
        elementoTres.style.backgroundColor = "#292942"
        elementoQuatro.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        elementoCinco.style.backgroundColor = "#FC7614"

        valor = Number(document.querySelector("#cinco").value)
    })

    submit.addEventListener("click", submeter)
}



function submeter() {
    localStorage.setItem("valor", valor)
}