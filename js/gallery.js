/*
Little image scroller for jumbotron
*/

// preload jumbotron images
$(function() {
	$("#img5").css("background", "url(" + featuredList[5] + ") center center no-repeat");
	$("#img4").css("background", "url(" + featuredList[4] + ") center center no-repeat");
	$("#img3").css("background", "url(" + featuredList[3] + ") center center no-repeat");
	$("#img2").css("background", "url(" + featuredList[2] + ") center center no-repeat");
	$("#img1").css("background", "url(" + featuredList[1] + ") center center no-repeat");
	$("#img0").css("background", "url(" + featuredList[0] + ") center center no-repeat");
});

function cycleOut(index,fadeSpeed) {
	//fades jumbotron image in/out, changes dot color
	$("#img" + index).fadeOut(fadeSpeed);
	$("#dot" + index).css("-webkit-filter", "invert(80%)");
}

function cycleIn(index,fadeSpeed) {
	// same
	$("#img" + index).fadeIn(fadeSpeed);
	$("#dot" + index).css("-webkit-filter", "invert(0%)");
}

$(document).ready(function() {

	var clickCount = 0;
	$("#next-arrow").click(function() {
		if (clickCount < 5) {
			cycleOut(clickCount, 300);
			clickCount++;
			cycleIn(clickCount, 200);
		} else {
			cycleOut(clickCount, 300);
			clickCount = 0;
			cycleIn(clickCount, 200);
		}
	});

	$("#prev-arrow").click(function() {
		if (clickCount > 0) {
			cycleOut(clickCount, 300);
			clickCount--;
			cycleIn(clickCount, 200);
		} else {
			cycleOut(clickCount, 300);
			clickCount = 5;
			cycleIn(clickCount, 200);
		}
	});

	$("#gallery").click(function() {
		location.href = featuredList[clickCount];
		return false;
	});

	$(".dots-nav").click(function() {
		var index = this.id.slice(-1);
		cycleOut(clickCount, 300);
		clickCount = index;
		cycleIn(clickCount, 200);
	});
})