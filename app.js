let numerosecreto = generarNumeroSecreto();

function asignartextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario))
    console.log(numeroDeUsuario);
    console.log(numerosecreto);
    console.log(typeof(numerosecreto))
    console.log(numeroDeUsuario === numerosecreto)
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10 + 1);

    
}

asignartextoElemento('h1',"EL NUMERO SECRETO");
asignartextoElemento('p','Indica un numero del 1 al 10!');

