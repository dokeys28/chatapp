const chat = document.querySelector('.chat')
const input_chat = document.querySelector('.input_chat')
const boton_enviar = document.querySelector('.enviar')
const url_api = 'https://api_chat-1-p3052353.deta.app/enviar/'
const url_api_ver = 'https://api_chat-1-p3052353.deta.app/ver/'

async function enviar(){
    await fetch(url_api+ String(input_chat.value))
    let p = document.createElement('p')
    p.innerHTML = String(input_chat.value)
    chat.appendChild(p)
    input_chat.value = ''
    location.reload()
}

async function ver(){
    let x = await fetch(url_api_ver)
    x = await x.json()
    x.forEach(element=>{
        let p = document.createElement('p')
        p.innerHTML = element
        chat.appendChild(p)
    })
}

boton_enviar.addEventListener('click', enviar)
document.addEventListener("DOMContentLoaded",ver)

