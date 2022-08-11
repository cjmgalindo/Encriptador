let input = document.querySelector("#input")
let message = document.querySelector("#message")

const botonEncriptador = document.querySelector("#encriptar")
const botonDesencriptador = document.querySelector("#desencriptar")
const botonCopiar = document.querySelector("#copiar")



function Encriptador() {
    let valor = input.value
    let codigo = ""

    for (let i = 0; i < valor.length; i++) {
        switch (valor[i]) {
            case "a":
                codigo += "ai"
                break;
            case "e":
                codigo += "enter"
                break;
            case "i":
                codigo += "imes"
                break;
            case "o":
                codigo += "ober"
                break;
            case "u":
                codigo += "ufat"
                break;
            default:
                codigo += valor[i]
                break;
        }
    }

    Message(codigo)
}
botonEncriptador.addEventListener("click", Encriptador)



function Desencriptador() {
    let valor = input.value
    let codigo = ""
    for (let i = 0; i < valor.length; i++) {
        const vocales = "aeiou"
        if(vocales.includes(valor[i])){
            switch (valor[i]) {
                case "a":
                    codigo += "a"
                    i += 1 
                    break;
                case "e":
                    codigo += "e"
                    i += 4; 
                    break;
                case "i":
                    codigo += "i"
                    i += 3;
                    break;
                case "o":
                    codigo += "o"
                    i += 3;
                    break;
                case "u":
                    codigo += "u"
                    i += 3;
                    break;
            }
        } else {
            codigo += valor[i]
        }   
    }
    Message(codigo)
}
botonDesencriptador.addEventListener("click", Desencriptador)




function Message (codigo){
    message.textContent = ""
    message.setAttribute("id", "mensajeProcesado")

    // let mensajeTexto = document.createElement("p")
    
    
    let mensajeTexto = document.createElement("textarea")
    mensajeTexto.value = codigo
    mensajeTexto.setAttribute("readonly", "true")
    message.appendChild(mensajeTexto)
    // message.appendChild(button)


    Copiar(mensajeTexto)
}

function Copiar(mensajeTexto){
    let button = document.createElement("button")
    button.innerHTML = "copiar"
    button.setAttribute("id","copiar")
    button.addEventListener("click",e => {
        console.log(mensajeTexto)
        let valor = mensajeTexto
        valor.select()
        document.execCommand('copy')
        // let valor = mensajeTexto.innerHTML;
        // navigator.clipboard.writeText(valor)
    })
    message.appendChild(button);
}
