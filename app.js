// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// funcion agregar amigos
function agregarAmigo() {
   const input = document.getElementById("amigo");
   let nombre = input.value.trim();
   nombre = nombre.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
   if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    limpiarCampo();
    return;
  } else if (amigos.includes(nombre)) {
    alert("El amigo ya está en la lista.");
    limpiarCampo();
    return;
   }
    amigos.push(nombre);
    limpiarCampo();
    actualizarListaAmigo(nombre);
    
}
function actualizarListaAmigo(nombre) {
    const lista = document.getElementById("listaAmigos");
    const elementoLista = document.createElement('li');
    elementoLista.textContent = nombre;
  
    lista.appendChild(elementoLista);
   

}
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoElegido = amigos[amigoAleatorio];
        let elementoHTML = document.getElementById('resultado');
        elementoHTML.innerHTML = `el amigo secreto es: ${amigoElegido}`;
        // crear el boton reiniciar juego
        const botonReiniciar = document.createElement('button');
        botonReiniciar.textContent = 'Reiniciar Juego';
        botonReiniciar.classList.add('botonReiniciar');
        botonReiniciar.onclick = function () {
            reiniciarJuego();
        }
        elementoHTML.appendChild(botonReiniciar);
    } else {
        alert('No hay amigos para elegir.');
        return;
    }
        
}

function reiniciarJuego() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.querySelector('#amigo').value = '';
    alert('El juego se ha reiniciado.');
}
 