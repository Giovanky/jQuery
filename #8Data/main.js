$('document').ready(function(){
  /*var enlace = $('.lateral').find('a').last();
  console.log(enlace);
  enlace.data('rrss','Nuevo Valor');//Setter
  var valorData = enlace.data('rrss');//Getter
  console.log(valorData);*/

  //Filtrar Seleccion
  var datos = $('*').filter(function(){
    var datos = $(this).data('rrss');
    return datos === 'snapchat';
  });
  console.log(datos);
});
