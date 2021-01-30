$(document).ready(function() {
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // add .adjust class to navbar once scrolled below jumbotron
  $(window).scroll(function() {
    let scrollPos = $(document).scrollTop()
    // console.log(scrollPos)
    let about = $('#about').offset().top
    // console.log(about)
    if(scrollPos >= about) {
      $('#mainNav').addClass('adjust')
    } else {
      $('#mainNav').removeClass('adjust')
    }
    
  })
})