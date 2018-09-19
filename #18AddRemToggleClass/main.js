$('document').ready(function(){
    var enlaces = $('a');

    $('.lateral').children('img').on('click', function(){
        /*if(enlaces.hasClass('dopodcast')){
            //Si la clase esta aplicada, eliminar
            enlaces.removeClass('dopodcast');
        }else{
            console.log('click');
            //Si no esta aplicada, aplicar
            enlaces.addClass('dopodcast');
        }*/
        enlaces.toggleClass('dopodcast');
    });
});
