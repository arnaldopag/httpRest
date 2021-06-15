const url = 'https://api-ppw.herokuapp.com/api/103025/users'
const ul = document.querySelector('#lista')
var lista = []
const form = document.querySelector('form')
form.addEventListener('submit', cadastro)
var inputName = document.querySelector('#nome')
var inputPassword = document.querySelector('#senha')

function cadastro(evento){
    evento.preventDefault();
    let usuario = 
        {
            "name": inputName.value,
            "password": inputPassword.value
        }
        let texto = JSON.stringify(usuario)

        const opcoes = {
            method: "POST",
            body: texto,
            headers:{
                "content-type": "application/json"
            }
        }
        const requisicao = fetch(url, opcoes)
        requisicao.then(function (resposta){
            console.log(resposta.statusText)
            console.log(resposta.status)
            recebeUsuario()
        })
}

function recebeUsuario(){
    let requisicao = fetch(url)
    requisicao.then(function(resposta){
       const requisicao =  resposta.json()
        requisicao.then(function(usuarios){
            lista = usuarios
            mostrarUsuario()
        })
    })
}

function mostrarUsuario(){
    for(const usuario of lista){
        const li = document.createElement('li')
        li.textContent = `${usuario.name} (${usuario.password})`
        ul.appendChild(li)
        }
    }
