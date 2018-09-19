$('document').ready(function(){
  //Peticion simple con ajax
  /*$.ajax('social.html',{
      success: function(respuesta){
          $('.lateral').append($(respuesta));
      }
  })*/
  //Metodo atajo GET
  $.get('social.html',function(respuesta){
    $('.lateral').append($(respuesta));
  });

  //Cargar JSON desde el servidor
  $.getJSON('https://randomuser.me/api/?results=500')
  .then(function(respuesta){
      //Insertar cada avatar del usuario ficticio en el DOM
      respuesta.results.forEach(function(persona){
          $('<img></img>')
          .attr('src',persona.picture.thumbnail).appendTo('.contenido');
      });
  });
});
