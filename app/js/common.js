$(function() {

	// Custom JS

	$("#my-menu").mmenu({
		"extensions": [
			"border-none"
	 ]	
 });

 $('.the-plan').matchHeight();
 $('.info-box-body').matchHeight();
 
 $('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:true,
  navText: ["","Next testimonial &rarr;"],
	responsive:{
			0:{
					items:1
			}
	}
});

var api = $('#my-menu').data('mmenu');
api.bind('open:finish', function() {
	$('.hamburger').addClass('is-active');
}).bind('close:finish', function() {
	$('.hamburger').removeClass('is-active');
});


});
