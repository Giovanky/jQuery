$(document).ready(function () {
    // Buscamos los elementos a guardar/seleccionar
    var lis = $('li');
    var img = lis.find('img');
    var activo = 0;
    var cantidad = img.length-1;

    //Ocultamos las imagenes
    lis.hide();

    //Eliminar las imagenes como elemento/tag y añadirlas como fondo de su parent
    img.each(function(index, img){
        lis.eq(index).css({
            'background-image': 'url('+$(img).attr('src')+')',
            'background-size': 'cover',
            'background-position': 'center center',
            'position': 'absolute'
        });
        $(img).remove();
    });
    //Mostrar la primera imagen
    lis.eq(activo).fadeIn();

    //Event listeners
    $('#derecha').click(function(e){
        e.preventDefault();
        activo += 1;
        if(activo > cantidad){
            activo = 0;
        }
        mostrarImg();
    });

    $('#izquierda').click(function(e){
        e.preventDefault();
        activo -= 1;
        if(activo < 0){
            activo = cantidad;
        }
        mostrarImg();
    });
    function mostrarImg(){
        lis.hide().eq(activo).fadeIn();
    }

});