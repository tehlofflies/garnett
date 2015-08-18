/*
Parallax written to work with a jumbotron with changing images.
Also works with a nav bar that eventually pins to the top.
*/

$(function() {

	$(window).scroll(function() {

		var distanceScrolled = Math.max(0, $(window).scrollTop());
		/* Pin To */
		var $navbar = $('nav');
		var $navbarWrapper = $('.navbar-wrapper')

		var pinPoint = $navbarWrapper.offset().top;

		if (distanceScrolled >= pinPoint) {
			$navbar.addClass('pinned');
		} else {
			$navbar.removeClass('pinned')
		}

		/* Parallax */
		var FACTOR = 0.55;
		var $jumbotron = $(".jumbotron-image:visible");

		var initDistance = $jumbotron.offset().top;
		var totalDistance = $jumbotron.height();
		var percentComplete = Math.min(distanceScrolled / totalDistance, 1);

		var translateY = (percentComplete * 100 * FACTOR);

		console.log(initDistance);
		if (initDistance - $(window).scrollTop() == 0) {
			$jumbotron.css({'transform': 'translateY(' + translateY + '%)'});
		}


		/* Scroll To */
		$('a[href*="#"]').click(function(e) {
			e.preventDefault();
			var $target = $($(this).attr('href'));
			var scrollTop = $target.offset().top;
			$('html, body').animate({'scrollTop': scrollTop}, 500);
		});
	});
});