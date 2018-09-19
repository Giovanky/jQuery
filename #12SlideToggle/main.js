$('document').ready(function(){
    var parrafos = $('.contenido').children('p');
    /*parrafos.slideToggle(1000,function(){
        //Callback
        console.log('Finalizado!');
    });*/
    $('.lateral').children('img').on('click',function(){
        mostrarSecuencia(parrafos,500);
    });
    
    function mostrarSecuencia(coleccion,tiempo){
        tiempo=tiempo || 1000;
        coleccion.each(function(indice,elemento){
            $(elemento).slideToggle(tiempo*(indice+1));
        });
    }
});
