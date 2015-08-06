/*
Parallax written to work with a jumbotron with changing images.
Also works with a nav bar that eventually pins to the top.
*/

$(function() {

	$(window).scroll(function() {

		var FACTOR = 0.55;
		var $jumbotron = $(".jumbotron-image:visible");

		var distanceScrolled = Math.max(0, $(window).scrollTop());
		var totalDistance = $jumbotron.height();
		var percentComplete = Math.min(distanceScrolled / totalDistance, 1);

		var translateY = (percentComplete * 100 * FACTOR);

		$jumbotron.css({'transform': 'translateY(' + translateY + '%)'});

	});
});