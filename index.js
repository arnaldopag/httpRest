const url = fetch('https://api-ppw.herokuapp.com/api/103025/users')
const botao = document.querySelector('button')
botao.addEventListener('click', mostrar)
const ul = document.querySelector('#lista')
var lista = []

var dado = url.then(function(resposta){
    return resposta.json()
})

dado.then(function(nome){
    return console.log((nome))
})

function mostrarUsuario(){
for(const usuario of lista){
    const li = document.createElement('li')
    li.textContent = `${usuario.name} (${usuario.password})`
    ul.appendChild(li)

}
}