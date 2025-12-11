const titulo = document.querySelector('.titulo-principal');
const parrafos = document.querySelectorAll('.texto');
const resultado = document.getElementById('resultado');

const btnCambiarTitulo = document.getElementById('btnCambiarTitulo');
const btnParrafos = document.getElementById('btnParrafos');
const btnResultado = document.getElementById('btnResultado');
const btnModoNoche = document.getElementById('btnModoNoche');

function cambiarTitulo() {
    titulo.innerText = "Título cambiado desde JS (Clase 2)";
}

function modificarParrafos() {
    parrafos.forEach(p => {
        p.style.color = 'blue';
        p.style.fontWeight = 'bold';
    });
}

function escribirResultado() {
    resultado.innerHTML = "Texto escrito desde JavaScript usando innerHTML";
}

function modoNoche() {
    document.body.classList.toggle('modo-noche');
    resultado.classList.toggle('modo-noche');
    parrafos.forEach(p => p.classList.toggle('modo-noche'));
}

btnCambiarTitulo.onclick = cambiarTitulo;
btnParrafos.onclick = modificarParrafos;
btnResultado.onclick = escribirResultado;
btnModoNoche.onclick = modoNoche;
