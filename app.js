let numerosecreto = 0;
let numeroMax = 10;
let listaNumerosSorteados = [];
let intentos = 0;



function asignartextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;

}



function condicionsStarts() {
    
    limpiarCaja();
    asignartextoElemento('h1',"EL NUMERO SECRETO");
    asignartextoElemento('p','Indica un numero del 1 al 10!');
    numerosecreto = generarNumeroSecreto();
    intentos = 1;
    

    
}

condicionsStarts();

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

function reiniciarJuego() {
    //Clean box
    limpiarCaja();
    // get mesagge of numbers
    //Genere ramdom number
    //Reset trys
    condicionsStarts();
    //Disable button new game
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    

}






function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax+ 1);

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros, cerramos el juego
        if (listaNumerosSorteados.length == numeroMax) {
            asignartextoElemento('p','Ya se sortearon todos los numeros')
        } else{
             //Si el numero generado esta incluido esta includio en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            
            } else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }



    
}





