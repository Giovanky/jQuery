$('document').ready(function(){
  /*//Var Cache
  var parrafo = $('p').last();
  //Css
  parrafo.css('color','goldenrod');
  //Attr Data
  parrafo.data('color','amarillo');
  //Append
  var enlace = $('<a href="http://www.wmedia.es" target="_blank">WMedia</a>');
  parrafo.append(enlace);*/

  //Method Chaining
  var enlace = $('<a href="http://www.wmedia.es" target="_blank">WMedia</a>');
  $('p').last().css('color','goldenrod').data('color','amarillo').append(enlace);

});
