$(document).ready(function () {
    // Mostramos el contenido del primer panel
    $('.panel_contenido').first().slideDown();
    //Event listeners
    $('.panel_cabecera').on('click', function(e){
        e.preventDefault();
        $('.panel_contenido').not(this).each(function(){
            $(this).slideUp();
        });
        $(this).siblings('.panel_contenido').slideToggle();
    })
});