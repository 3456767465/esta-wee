let pantallitaNumero = document.getElementById('pantalla2')

function agregarNumero(parametro){
    pantallitaNumero.value += parametro
}

function borrarTodoNumero(){
    pantallitaNumero.value = '';
}

function borrarCadaNumero(){
    pantallitaNumero.value = pantallitaNumero.value.slice(0, -1)
}