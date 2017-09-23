// When the user clicks the button (#showModal)
  // Fade in the modal (.modal-background)



// When the user clicks the close button (#close)
  // Fade out the modla (.modal-background)



$('.bike').on('mouseenter', function(){
  $('.bike').addClass('bike-move');
})

$('.hamburger').on('click', function(){
  $('.nav-links').addClass('active');
})

$('.close').on('click', function () {
  $('.nav-links').removeClass('active');
});


$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();

  console.log(distanceScrolled);

    if (distanceScrolled>=483) {
			$('.designer').addClass('scrolled-left');
      $('.designer').css('color', 'black');

      $('nav').addClass('scrolled');
      $('nav a').css('color', 'black');


		} else {
			$('.designer').removeClass('scrolled-left');
      $('.designer').css('color', 'white');

      $('nav').removeClass('scrolled');
      $('nav a').css('color', 'white');


		}
});
