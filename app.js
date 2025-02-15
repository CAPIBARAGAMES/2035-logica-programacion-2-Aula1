

function asignartextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;

}

function intentoDeUsuario(){
    alert("Olis");
}

asignartextoElemento('h1',"EL NUMERO SECRETO");
asignartextoElemento('p','Indica un numero del 1 al 10!' );