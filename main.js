// Select all links with hashes

$( document ).ready(function() {
  ///first we need to tell our skript to listen for a mouse click on the burger button.
  $(".burger-button").click(function(){$(".burger-button").toggleClass("active");
  $(".burger-menu").slideToggle();

});


$(".login-button").click(function(){
  $(".login").toggleClass("flexcenter");

});

  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });


  $(".login").click(function(){
    console.log('test')
    $(this).toggleClass("flexcenter");
  }).children().click(function(e){
    return false;
  });



  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 75) {
      $('.scrollcheck').addClass('headerfixed');
    }
    else {
      $('.scrollcheck').removeClass('headerfixed');
    }
  });


  $(".dropdown-nav").click(function(){
    $(this).children(".dropdown-content").slideToggle();
  });

  $(".dropdown-section-1").click(function(){
    $(".dropdown-section-content-1").slideToggle();
  });
  $(".dropdown-section-2").click(function(){
    $(".dropdown-section-content-2").slideToggle();
  });
  $(".dropdown-section-3").click(function(){
    $(".dropdown-section-content-3").slideToggle();
  });
  $(".dropdown-section-4").click(function(){
    $(".dropdown-section-content-4").slideToggle();
  });


// this is for the popup gallery

  $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Nick Della </small>';
			}
		}
	});


});
