$('.menuToggle').on('click', function () {
    $('.menu').addClass('open');
  });
  
  $( '.menu' ).on("click", function(){
    $('.menu').removeClass('open');
  });