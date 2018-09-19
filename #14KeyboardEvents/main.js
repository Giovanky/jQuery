$('document').ready(function(){
    var input = $('#claim');
    var h1 = $('.contenido').children('h1');
    input.on('keyup',function(e){
        h1.text(input.val());
    });
});
