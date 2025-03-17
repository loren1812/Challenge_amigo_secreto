// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("¡Hola!, por favor, inserta un nombre.");
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = ""; // Limpiar el campo de texto
    mostrarAmigos(); // Actualizar la lista en pantalla
}
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar lista existente

    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay personas con quienes sortear :(");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];
    document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`;
}
