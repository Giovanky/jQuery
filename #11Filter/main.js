$('document').ready(function(){
 //Selector
 //var enlaces = $('.lateral').find('a').filter(':even');//Pares
 var enlaces = $('.lateral').find('a').filter(':odd');//Impares
 enlaces.css('transform','scale(2)');

 //Funcion - test
 var enlaceSnap = $('.lateral').find('a').filter(function(indice,elemento){
 //console.log(elemento === this); Es this
 return $(elemento).find('span').text() === 'Snapchat';
 });
 console.log(enlaceSnap.css('transform','rotate(45deg)'));
});
