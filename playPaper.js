console.log('about to load paper stuff');

var numBalls = 5;
var radius = new Point(1, 0);

for (var i = 0; i < numBalls; i++) {
	console.log('creating balls');
	var circle = new Path.Circle(new Point(window.innerWidth / 2, window.innerHeight / 2), radius.length);
	circle.fillColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}