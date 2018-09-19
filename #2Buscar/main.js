//Esperar que el dom este cargado
/*document.addEventListener('DOMContentLoaded', function(){
    console.log('Listoco');
});
$(document).ready(function(){
    console.log('$Listoco');
});
$(document).on('DOMContentLoaded', function(){
    console.log('Litoco tambien');
});*/

$(document).ready(function(){
    //Descendientes directos 
    $('aside>img').fadeOut('slow');

    //Busqueda de elementos
    $('a span').css('color', 'red');

    //Selectores multiples
    //$('a,span,p').slideToggle();

    //Pseudo clases
    $('p:odd').css({
        'font-weight': 'bold',
        'color': 'goldenrod'
    });
});