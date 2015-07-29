/*
Parallax written to work with a jumbotron with scrolling images
*/

$(function() {

	$(window).scroll(function() {

		var FACTOR = 0.35;
		var $jumbotron = $(".jumbotron-image:visible");

		var distanceScrolled = Math.max(0, $(window).scrollTop());
		var totalDistance = $jumbotron.height();
		var percentComplete = Math.min(distanceScrolled / totalDistance, 1);

		var translateY = (percentComplete * 100 * FACTOR);

		$jumbotron.css({'transform': 'translateY(' + translateY + '%)'});

	});
});