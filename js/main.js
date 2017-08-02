$(document).ready(function(){
  $('.card__photo').slick({
  	accessibility: true,
  	dots: true,
  	dotsClass: 'slick-dots',
  	// appendDots: $('')
  	// centerMode: true,
  	// centerPadding: '100px',
  	// edgeFriction: 1,
  	// respondTo: 'slider',
  	swipeToSlide: true,
  	mobileFirst: true,
  	focusOnSelect: true,
  	fade: true,
  	cssEase: 'ease-in',
  	infinite: true,
  	speed: 300,
  	slidesToShow: 1,
  	arrows: true,
  	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  	nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'

  });
});

// $('.card__photo').slick();

