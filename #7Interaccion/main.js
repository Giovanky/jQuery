$('document').ready(function(){
    $('.lateral').find('a').last().on('click',function(){
      $('.contenido').children('p').css('color','red');
    });
  
    $('.contenido').children('p').on('click',function(e){
      console.log(e);
      e.preventDefault();
      console.log(this);
      $(this).css('color','red');
    });
  });