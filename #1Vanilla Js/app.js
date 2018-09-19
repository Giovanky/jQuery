/*var elemento = document.querySelector('h1');
var timeOut = setTimeout(function(){
    elemento.innerHTML = 'Hola!';
},3000);*/

var elemento = $('h1');
console.log(elemento.text());
var timeOut = setTimeout(function(){
    elemento.text('Hola con jQuery');
},3000);