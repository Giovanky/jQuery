$('document').ready(function(){
  //Event Listener Directo
  /*$('a').on('click',function(e){
    e.preventDefault();
    console.log('A clicked');
  })*/

  //Event Listener Delegado
  $('.contenido').on('click','a',function(e){
    e.preventDefault();
    console.log('A clicked');
  })

  //Method Chaining
  var enlace = $('<a href="http://www.wmedia.es" target="_blank">WMedia</a>');
  $('p').last().css('color','goldenrod').data('color','amarillo').append(enlace);
});
