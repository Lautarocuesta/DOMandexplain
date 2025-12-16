const titulo = document.querySelector('.titulo-principal');
const parrafos = document.querySelectorAll('.texto');
const resultado = document.getElementById('resultado');

const btnCambiarTitulo = document.getElementById('btnCambiarTitulo');
const btnParrafos = document.getElementById('btnParrafos');
const btnResultado = document.getElementById('btnResultado');
const btnModoNoche = document.getElementById('btnModoNoche');

///desde aca cambiamos el titulo 
function cambiarTitulo() {
    
    titulo.innerText = "tengo 15 años";
}

function modificarParrafos() {
    parrafos.forEach(p => {
        p.style.color = 'purple';
        p.style.fontWeight = 'Arial';
    });
}

function escribirResultado() {
    resultado.innerHTML = "Probar funcionalidades";
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
