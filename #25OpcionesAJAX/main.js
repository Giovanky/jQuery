$('document').ready(function(){
   //Peticion esencial con AJAX
   /*$.ajax('social.html',{
    beforeSend: function(){
        //Mostrar loading spinner
    },
    success: function(respuesta, status, request){
        //console.log(arguments);
        $('.lateral').append($(respuesta));
    },
    error: function(request, tipoError, mensaje){
        //console.error(arguments);
    },
    complete: function(request, status){
        console.info(arguments);
    },
    timeout: 1000,
   });*/

   //jQuery 3.0 > Promise API
   $.ajax('social.html')
   //Success()
   .done(function(respuesta){
       $('.lateral').append($(respuesta));
   })
   //Error()
   .fail(function(request,tipoError,mensaje){
       console.error(arguments);
   })
   .always(function(request,status){
    console.log(arguments);
   });
});
