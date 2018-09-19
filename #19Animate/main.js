$('document').ready(function(){
    //Velocity.js !*
    //GreenSock !*
    $('.lateral').animate({
        'flex-basis':'20%',
        'padding': '10px'
    },1000,function(){
        //Los callback en ES6 se pueden reemplazar con promesas!
        $('main').animate({
            'width': '1100px'
        },4000)
    })
});
