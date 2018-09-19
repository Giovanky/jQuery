$('document').ready(function(){
    //Velocity.js !*
    //GreenSock !*
    //Animate.css !*
    var main = $('main'); 
    main.addClass('animated bounceIn');
    var timeout = setTimeout(function(){
        main.addClass('bounceOut');
        clearTimeout(timeout);
    },2000)
});
