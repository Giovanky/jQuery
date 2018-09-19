$('document').ready(function(){
    var enlaces = $('a');
    //Getter
    console.log(enlaces.css('font-size'));

    //Getter multiple
    console.log($('.lateral').css([
        'font-size',
        'color',
        'margin'
    ]));

    //Setter
    $('p').css('color','goldenrod');

    //Setter multiple
    enlaces.css({
        'color': 'pink',
        'font-size': '40px',
        'margin': '100px'
    })

});
