$(window).scroll(function() {
    const headerHeight = $('.header').outerHeight();
    const scrollPosition = $(window).scrollTop();
  
    if (scrollPosition > headerHeight) {
      $('.header').addClass('header--fixed');
    } else {
      $('.header').removeClass('header--fixed');
    }
  });