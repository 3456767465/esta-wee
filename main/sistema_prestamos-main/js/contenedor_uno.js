let pantallitaNombre = document.getElementById('pantalla')

function agregarPalabra(parametro){
    pantallitaNombre.value += parametro
}


function borrarCadaPalabra(){
    pantallitaNombre.value = pantallitaNombre.value.slice(0,-1)
}