let numerosecreto = generarNumeroSecreto();
let intentos = 1;

function asignartextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;

}


asignartextoElemento('h1',"EL NUMERO SECRETO");
asignartextoElemento('p','Indica un numero del 1 al 10!');

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario))
    console.log(numeroDeUsuario);
    console.log(numerosecreto);
    console.log(typeof(numerosecreto))
    console.log(intentos);
    if (numeroDeUsuario === numerosecreto){
        asignartextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto
        if (numeroDeUsuario > numerosecreto){
            asignartextoElemento('p','El numero secreto es menor');
        } else{
            asignartextoElemento('p','El numero secreto es mayor')
        }
    }
    intentos++;
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10 + 1);

    
}


