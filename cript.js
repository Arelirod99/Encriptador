//const botonCifrar = document.getElementById("cifrar");
//const botonDescifrar = document.getElementById("descifrar"); 
//let botonPresionado;

function textoDinamico(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

 function encriptar(){
    let texto = document.getElementById("palabra").value;
    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    document.getElementById("resultado").value = textoCifrado;

 }
 function desencriptar(){
    let texto = document.getElementById("palabra").value;
    let textoDescifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    document.getElementById("resultado").value = textoDescifrado;

 }

/* function validacionEjecucion() {
    var palabraAntes = document.getElementById("palabra").value;
    // Expresión regular que verifica si la cadena contiene solo letras minúsculas
    const palabraSimple = /^[a-z]+$/;
    if (palabraSimple.test(palabraAntes)) {
      if(botonPresionado == 'cifrar'){
        encriptar();
      } else if (botonPresionado == 'descifrar'){
        desencriptar();
      }
    } else {
        alert('Solo se permiten minusculas');
      return false; // La cadena no es válida
    }
  }

  botonCifrar.addEventListener('click', function() {
    botonPresionado = 'cifrar';
    validacionEjecucion();
});

botonDescifrar.addEventListener('click', function() {
    botonPresionado = 'descifrar';
    validacionEjecucion();
}); */

  textoDinamico('h1','Ingresa la palabra a descifrar');
  textoDinamico('p','Solo se permiten minusculas');