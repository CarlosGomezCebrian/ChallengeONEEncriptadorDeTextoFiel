const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".botonCopiar")
const ningunMensaje = document.querySelector(".ningunMensaje")
const textoImagen = document.querySelector(".textoImagen")

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";    
    botonCopiar.style.display = "inherit";
    mensaje.style.display = "inherit"
    ningunMensaje.style.display = "none"
    textoImagen.style.display = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "emter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function botonDesencriptar() {
    const textoEncriptado = Desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    botonCopiar.style.display = "inherit";
    mensaje.style.display = "inherit"
    ningunMensaje.style.display = "none"
    textoImagen.style.display = "none"

   
}

function Desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "emter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiarTexto(texto) {
    const textoCopiado = (mensaje.value)
    textArea.value = textoCopiado
    mensaje.value = "";
    textArea.focus();    
    botonCopiar.style.display = "none";
    mensaje.style.display = "none"
    ningunMensaje.style.display = "inherit"
    textoImagen.style.display = "inherit"
    return texto
}

function ingresarTexto() {    
    mensaje.value = "";
    textArea.value = "";    
    botonCopiar.style.display = "inherit";
    mensaje.style.display = "inherit";
    ningunMensaje.style.display = "none";
    textoImagen.style.display = "none";
    mensaje.focus ();
    
}    


