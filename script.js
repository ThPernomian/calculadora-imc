let formulario = document.querySelector("form")
let cxNome = document.querySelector("#nome")
let cxIdade = document.querySelector("#idade")
let cxAltura = document.querySelector("#altura")
let cxPeso = document.querySelector("#peso")
let cxImc = document.querySelector("#resultadoImc")

let aviso = document.querySelector("#aviso")
let dados = document.querySelectorAll(".pessoa")

let btnEnviar = document.querySelector("#btnEnviar")
let btnLimpar = document.querySelector("#btnLimpar")


btnEnviar.addEventListener("click", function(e) {
    e.preventDefault()

    let nome = cxNome.value    
    let idade = cxIdade.value
    let altura = cxAltura.value
    let peso = cxPeso.value
    let imc = (peso / (altura * altura)).toFixed(1)

    cxImc.value = imc
    let situacao = situacaoDoPeso(imc)
    aviso.textContent = situacao

    //criar objeto pessoa
    let pessoa = {
        nome: nome,
        idade: idade,
        altura: altura,
        peso: peso,
        imc: imc,
        situacao: situacao,
    }

    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + " anos"
    dados[3].textContent = pessoa.peso + " kg"
    dados[4].textContent = pessoa.altura + " m"
    dados[5].textContent = pessoa.imc + " " + pessoa.situacao
})

function situacaoDoPeso(imc){
    let situacao = ""

    if(imc < 18.5){
        situacao = "Baixo peso"
    }else if(imc >= 18.5 && imc <= 24.9){
        situacao = "Peso Normal"
    }else if(imc >= 25 && imc <= 29.9){
        situacao = "Sobrepeso"
    }else if(imc >= 30 && imc <= 34.9){
        situacao = "Obesidade I"
    }else if(imc >= 35 && imc <= 39.9){
        situacao = "Obesidade II"
    }else if(imc >= 40){
        situacao = "Obesidade III"
    }else{
        situacao = "informe o peso corretamente"
    }
    return situacao   
    
}