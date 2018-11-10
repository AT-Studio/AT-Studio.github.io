// paper.install(window);

console.log('going to set canvas dims');

var body = document.querySelector('body');

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

body.onresize = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}