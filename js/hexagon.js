// define variables
var numberOfSides = 6,
    circumradius = 100,
    xCenter = 130,
    yCenter = 130,
    borderColor = "white",
    gridColor = "white",
    ratingsColor = "teal",
    ratings = testRatings;

//set canvas width and height
var canvas = document.getElementById('hex');
canvas.setAttribute("width", xCenter * 2);
canvas.setAttribute("height", yCenter * 2);

//get the context attribute of canvas
var context = canvas.getContext('2d');

//draws the hexagon
context.beginPath();
context.strokeStyle = borderColor;
context.moveTo(xCenter, yCenter - circumradius);
for (i = 1; i <= numberOfSides; i++) {
	context.lineTo(xCenter + circumradius * Math.cos((i + 1) * 2 * Math.PI / numberOfSides + Math.PI / numberOfSides), yCenter - circumradius * Math.sin((i + 1) * 2 * Math.PI / numberOfSides + Math.PI / numberOfSides))
}
context.stroke();
context.closePath();

//draws the inside lines of hexagon
context.beginPath();
context.strokeStyle = gridColor;
for (i = 1; i <= numberOfSides; i++) {
	context.moveTo(xCenter, yCenter);
	context.lineTo(xCenter + circumradius * Math.cos((i + 1) * 2 * Math.PI / numberOfSides + Math.PI / numberOfSides), yCenter - circumradius * Math.sin((i + 1) * 2 * Math.PI / numberOfSides + Math.PI / numberOfSides))
}
context.stroke();
context.closePath();

//draws the ratings polygon
context.beginPath();
context.strokeStyle = ratingsColor;
context.lineWidth = "2"
context.moveTo(xCenter, yCenter - ratings[0]/10 * circumradius)
for (i = 1; i < numberOfSides; i++) {
	var rating = ratings[i];
	context.lineTo(xCenter + rating / 10 * circumradius * Math.cos((i + 1) * 2 * Math.PI / numberOfSides + Math.PI / numberOfSides), yCenter - rating / 10 * circumradius * Math.sin((i + 1) * 2 * Math.PI / numberOfSides + Math.PI / numberOfSides))
}
context.lineTo(xCenter, yCenter - ratings[0]/10 * circumradius)
context.stroke();
context.closePath();

//fills the categories
context.font = "15px Lato"
for (i = 0; i < numberOfSides; i++) {
	context.fillText(testCategories[i], xCenter - 20 + 1.25 * circumradius * Math.cos((i + 1) * 2 * Math.PI / numberOfSides + Math.PI / numberOfSides), yCenter + 5 - 1.15 * circumradius * Math.sin((i + 1) * 2 * Math.PI / numberOfSides + Math.PI / numberOfSides))
}

//draws points
for (i = 0; i < numberOfSides; i++) {
	var rating = ratings[i];
	context.beginPath();
	context.fillStyle = "teal";
	context.arc(xCenter + rating / 10 * circumradius * Math.cos((i + 1) * 2 * Math.PI / numberOfSides + Math.PI / numberOfSides), yCenter - rating / 10 * circumradius * Math.sin((i + 1) * 2 * Math.PI / numberOfSides + Math.PI / numberOfSides), 4, 0, 2 * Math.PI)
	context.fill();
	context.closePath;
}