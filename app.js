let numerosecreto = generarNumeroSecreto();
console.log(numerosecreto);

function asignartextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;

}

function intentoDeUsuario(){
    alert("Olis");
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10 + 1);

    
}

asignartextoElemento('h1',"EL NUMERO SECRETO");
asignartextoElemento('p','Indica un numero del 1 al 10!' );

