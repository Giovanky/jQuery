$('document').ready(function(){
   var enlace =$('<a href="#">Conocer mas gatos negros!</a>');
   $('.contenido').find('p').prepend(enlace);//Dentro al inicio
   //$('.contenido').find('p').append(enlace);//Dentro al final
   $('.contenido').find('p').last().remove()(enlace);
});