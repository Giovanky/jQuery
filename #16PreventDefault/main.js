$('document').ready(function(){
    //Con formularios
    $('form').on('submit',function(e){
        e.preventDefault();
        console.log('submit!');
    });

    //Con hiperenlaces
    $('a').click(function(e){
        e.preventDefault();
        console.log('click!');
    });
});
