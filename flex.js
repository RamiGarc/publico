'use strict';
//nos ayuda a no dejar pasar ningun error

//pedimos el numero donde quiera decir HOLA
var cuadro = prompt("Diga en que cuadro quiere saludar (1-5)", "");
cuadro = parseInt(cuadro);
//cuadro sera ahora una variable numerica supuestamente entre 1 y 5
var selector = "c"+cuadro;
var estecuadro = document.getElementById(selector);
estecuadro.innerHTML="  o  <br/> ooo <br/>ooooo";

