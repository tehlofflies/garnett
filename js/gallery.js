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


function cycleItems(someArray) {

}

$(document).ready(function() {

	var clickCount = 0;
	$("#next-arrow").click(function() {
		if (clickCount < 5) {
			$("#img" + clickCount).fadeOut(300);
			clickCount++;
			$("#img" + clickCount).fadeIn(200);
		} else {
			$("#img" + clickCount).fadeOut(300);
			clickCount = 0;
			$("#img" + clickCount).fadeIn(200);
		}
	});

	$("#prev-arrow").click(function() {
		if (clickCount > 0) {
			$("#img" + clickCount).fadeOut(300);
			clickCount--;
			$("#img" + clickCount).fadeIn(200);
		} else {
			$("#img" + clickCount).fadeOut(300);
			clickCount = 5;
			$("#img" + clickCount).fadeIn(200);
		}
	});

	$("#gallery").click(function() {
		location.href = featuredList[clickCount];
		return false;
	});

	$(".dots-nav").click(function() {
		var index = this.id.slice(-1);
		$("#img" + clickCount).fadeOut(300);
		clickCount = index;
		$("#img" + index).fadeIn(200);
	});
})