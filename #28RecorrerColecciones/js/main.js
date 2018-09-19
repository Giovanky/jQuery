// Esperar que el DOM esté listo
$(document).ready(() => {
    // Cargamos el snippet de navegación lateral
    $.get('social.html')
        .done((respuesta) => {
            $('.lateral').append($(respuesta));
        });

    // Adoptar
    $('.adoptar').children('input').on('click',function(e){
        e.preventDefault();
        
        $.getJSON('adopcion.php')
        .then(respuesta => console.log(respuesta))
        .fail(error => console.error(Error(error)))
        .always(respuesta => console.log('Completado'));
    });
});
