$('document').ready(function(){
    var input = $('#claim');
    var h1 = $('.contenido').children('h1');
    input.on('keyup',function(e){
        var cod = e.which;
        //13 === Enter
        //Mousetrap permite varias teclas!
        if(cod === 13){
            h1.text(input.val());
        }
        
    });
});
