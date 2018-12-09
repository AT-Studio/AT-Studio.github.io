/**
JavaScript file for projects.html
By: Alexander Thieler
*/

window.onload = function() {

	/* --------- Start: Animate balls in canvas --------- */

	var canvas = document.getElementById("crazypage-canvas");
	var audio = document.getElementById("ball-bounce");

	var context = canvas.getContext('2d');

	function randomNum(min, max) {
		return Math.random() * (max - min) + min;
	}

	var radius = 20;

	var locationX = [];
	var locationY = [];
	var velocityX = [];
	var velocityY = [];
	var color = [];

	/* Generate random spawn location and velocity for balls */
	for (var i = 0; i < 3; i++) {
		locationX[i] = randomNum(2 * radius, canvas.width - 2 *radius);
		locationY[i] = randomNum(2 * radius, canvas.height - 2 * radius);
		velocityX[i] = randomNum(-5, 5);
		velocityY[i] = randomNum(-5, 5);
		color[i] = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
	}

	/* Move balls through the convas and have them bounce off of the edges of the canvas */
	function animate() {
		requestAnimationFrame(animate);
		context.clearRect(0, 0, canvas.width, canvas.height);

		for (var i = 0; i < 3; i++) {
			context.beginPath();
			context.arc(locationX[i], locationY[i], radius, 0, 2 * Math.PI);
			context.fillStyle = color[i];
			context.fill();

			locationX[i] += velocityX[i];
			locationY[i] += velocityY[i];

			if (locationX[i] + radius > canvas.width || locationX[i] - radius < 0) {
				velocityX[i] = -velocityX[i];
//				audio.play();
			}

			if (locationY[i] + radius > canvas.height || locationY[i] - radius < 0) {
				velocityY[i] = -velocityY[i];
//				audio.play();
			}
		}
	}

	animate();

	/* --------- End: Animate balls in canvas --------- */

	/* --------- Start: Play RateIt video --------- */

	document.getElementById('rateit-video').addEventListener('ended', myHandler, false);
	function myHandler(e) {
    	setTimeout(function() {
        	document.getElementById('rateit-video').play();
    	}, 1000);
	}

	/* --------- End: Play RateIt video --------- */
	
}