'use strict';
//nos ayuda a no dejar pasar ningun error
//Defino variables globales
var color = 'white';

//ARRAY
var colorFr = new array('brown', 'rebeccapurple', 'greenyellow', 'forestgreen', 'lightpink');
var colorFn = [];
colorFn[0] = 'white';
colorFn[1] = 'blue';
colorFn[2] = 'black';
colorFn[3] = 'yellow';
colorFn[4] = 'red';

function pinturaInicial() {
    for (i = 0; i < 5; i++) {
        let identificador="c"+(i+1);
        let elemento = document.getElementById(identificador);
        elemento.style.backgroundColor = colorFn[i];
        elemento.style.color = colorFr[i];
    }
}

//Funciones
function obtieneColor() {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    color = getComputedStyle(cuadro).backgroundColor;
    console.log(color);
}
function saludar(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "  o  <br/> ooo <br/>ooooo";
}

pinturaInicial();
