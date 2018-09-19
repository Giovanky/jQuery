$('document').ready(function(){
    //Parent // Parents
    var parent = $('.lateral').find('span').last().parent();
    parent.css('border', '1px solid red');

    //Children
    var children = $('main').children();
    children.css('border','1px solid red');

    /*var children = $('main').children('*');
    children.css('border','1px solid red');*/

    children.css({
        'transition': 'all 2s',
        'transform': 'rotate(180deg)'
    });
});