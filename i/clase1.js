const titulo = document.getElementById("titulo");
const lista = document.getElementById("lista");
const nuevoItem = document.getElementById("nuevoItem");
const info = document.getElementById("info");

const btnCambiarTitulo = document.getElementById("btnCambiarTitulo");
const btnColorearLista = document.getElementById("btnColorearLista");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const btnCantidad = document.getElementById("btnCantidad");

let historial = [];

function cambiarTitulo() {
    titulo.innerText = "Título cambiado desde JS";
}

function agregarItem() {
    if (nuevoItem.value.trim() === "") return;

    let li = document.createElement("li");
    li.innerText = nuevoItem.value;

    lista.appendChild(li);
    historial.push(nuevoItem.value);

    info.innerHTML = "Historial: " + historial.join("");
    nuevoItem.value = "";
}

function colorearLista() {
    let items = lista.querySelectorAll("li");

    items.forEach(item => {
        item.style.color = "green";
        item.style.fontFamily = "calibri";  
    });
}

function eliminarItem() {
    let items = lista.querySelectorAll("li");
    if (items.length === 0) return;

    let confirmar = confirm("¿Seguro que querés borrar el último elemento?");
    if (!confirmar) return;

    lista.removeChild(items[items.length - 1]);
}

function contarItems() {
    alert("La lista tiene " + lista.querySelectorAll("li").length + " elementos.");
}

btnCambiarTitulo.onclick = cambiarTitulo;
btnColorearLista.onclick = colorearLista;
btnAgregar.onclick = agregarItem;
btnEliminar.onclick = eliminarItem;
btnCantidad.onclick = contarItems;
