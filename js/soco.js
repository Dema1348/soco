(function($) {
  "use strict"; // Start of use strict
  $('.carousel').carousel({interval:10000})

  
  $(".box").hover(function() {
    console.log($(this).find('#personas'))
    if($(this).find('#personas').length){
      $(".carousel").carousel(0);
    }
    if($(this).find('#futuro').length){
      $(".carousel").carousel(1);
    }
    if($(this).find('#innovacion').length){
      $(".carousel").carousel(2);
    }
    if($(this).find('#rodea').length){
      $(".carousel").carousel(3);
    }
    if($(this).find('#equipo').length){
      $(".carousel").carousel(4);
    }
   
   
  });

  $("#diversidad").click(function(e) {
    $(".carousel").carousel(1);
  });

  $("#desarrollo").click(function(e) {
    $(".carousel").carousel(2);
  });

  $("#rodea").click(function(e) {
    $(".carousel").carousel(3);
  });

  $("#equipos").click(function(e) {
    $(".carousel").carousel(4);
  });


  $('.boxes-personas>#box-1').hover(function(){
    $('#box-img').attr("src","img/mg-1378.jpg");
    $('#box-img').attr("srcset","img/mg-1378@2x.jpg 2x, img/mg-1378@3x.jpg 3x");
    $('#box-img-mini').attr("src","img/mg-1309.jpg");
    $('#box-img-mini').attr("srcset","img/mg-1309@2x.jpg 2x,img/mg-1309@3x.jpg 3x");

  },function(){
    resetPersonas();
  })

  $('.boxes-personas>#box-2').hover(function(){
    $('#box-img').attr("src","img/mg-0528.jpg");
    $('#box-img').attr("srcset","img/mg-0528@2x.jpg 2x, img/mg-0528@3x.jpg 3x");
    $('#box-img-mini').attr("src","img/mg-9772.jpg");
    $('#box-img-mini').attr("srcset","img/mg-9772@2x.jpg 2x,img/mg-9772@3x.jpg 3x");


  },function(){
    resetPersonas();
  })

  $('.boxes-personas>#box-3').hover(function(){
    $('#box-img').attr("src","img/mg-1259.jpg");
    $('#box-img').attr("srcset","img/mg-1259@2x.jpg 2x, img/mg-1259@3x.jpg 3x");
    $('#box-img-mini').attr("src","img/mg-0432.jpg");
    $('#box-img-mini').attr("srcset","img/mg-0432@2x.jpg 2x,img/mg-0432@3x.jpg 3x");

  },function(){
    resetPersonas();

  })

  $('.boxes-personas>#box-4').hover(function(){
    $('#box-img').attr("src","img/mg-9681.jpg");
    $('#box-img').attr("srcset","img/mg-9681@2x.jpg 2x, img/mg-9681@3x.jpg 3x");
    $('#box-img-mini').attr("src","img/mg-9432.jpg");
    $('#box-img-mini').attr("srcset","img/mg-9432@2x.jpg 2x,img/mg-9432@3x.jpg 3x");
  },function(){
    resetPersonas();

  })

  $('.boxes-personas>#box-5').hover(function(){
    $('#box-img').attr("src","img/mg-9525.jpg");
    $('#box-img').attr("srcset","img/mg-9525@2x.jpg 2x, img/mg-9525@3x.jpg 3x");
    $('#box-img-mini').attr("src","img/mg-0989.jpg");
    $('#box-img-mini').attr("srcset","img/mg-0989@2x.jpg 2x,img/mg-0989@3x.jpg 3x");

  },function(){
    resetPersonas();

  })

  function resetPersonas(){
    $('#box-img').attr("src","img/mg-0759.jpg");
    $('#box-img').attr("srcset","img/mg-0759@2x.jpg 2x, img/mg-0759@3x.jpg 3x");
    $('#box-img-mini').attr("src","img/mg-0080.jpg");
    $('#box-img-mini').attr("srcset","img/mg-0080@2x.jpg 2x,img/mg-0080@3x.jpg 3x");

  }


  $('.boxes-equipo>#box-1').hover(function(){
    $('#box-img').attr("src","img/mg-0268.jpg");
    $('#box-img').attr("srcset","img/mg-0268@2x.jpg 2x, img/mg-0268@3x.jpg 3x");
    $('#box-img-1').attr("src","img/arquitecto-trabajando.jpg");
    $('#box-img-1').attr("srcset","img/arquitecto-trabajando@2x.jpg 2x, img/arquitecto-trabajando@3x.jpg 3x");
    
  },function(){
    console.log("entre")
    resetEquipo();
  })

  function resetEquipo(){
    $('#box-img').attr("src","img/yiran-ding-478037-unsplash.jpg");
    $('#box-img').attr("srcset","img/yiran-ding-478037-unsplash@2x.jpg 2x, img/yiran-ding-478037-unsplash@3x.jpg 3x");
    $('#box-img-1').attr("src","img/fondo-detalle.jpg");
    $('#box-img-1').attr("srcset","img/fondo-detalle@2x.jpg 2x, img/fondo-detalle@3x.jpg 3x");

  }


})(jQuery); // End of use strict
