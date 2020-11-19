// JavaScript Document
var canvas = document.querySelector('canvas');

fitToContainer(canvas);

function fitToContainer(canvas) {
  // Make it visually fill the positioned parent
  canvas.style.width ='100%';
  canvas.style.height='100%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

var c = canvas.getContext('2d');


function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
		
	this.draw = function() {
	c.beginPath();
	c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	c.strokeStyle = "#88008c";
	c.stroke();
	
		
	}
	
	this.update = function() {
	if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
		this.dx = -this.dx;
	}
	if (this.y + this.radius > innerHeight || this.y - this.radius< 0) {
		this.dy = -this.dy;
	}
	this.x += this.dx;
	this.y += this.dy;
		this.draw();
	}
	
}
var circleArray = [];

for (var i=0; i < 1000;i++) {
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5) * 10;
	var dy = (Math.random() - 0.5) * 10;
	var radius = Math.random() * 10;
	circleArray.push(new Circle(x, y, dx, dy, radius));
	
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();
