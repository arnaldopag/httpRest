const url = fetch('https://api-ppw.herokuapp.com/api/103025/users')
const botao = document.querySelector('button')
botao.addEventListener('click', mostrar)
var lista = []

var dado = url.then(function(resposta){
    return resposta.json()
})

dado.then(function(nome){
    return console.log((nome))
})

function mostrar(){
const nome = document.querySelector('#nome')
const senha = document.querySelector('#senha');
var n = nome.value
var s = senha.value

console.log(n)
console.log(s)
}