$(function(){
function greeting(){
  var hello = ["Bonjour le monde","Hallo Welt","Ciao mondo","Witaj świecie","Kon'nichiwa sekai","Hola Mundo","Hello World","Nǐ hǎo, shìjiè","Hej Verden","Hallo Wereld","Hei maailma"];
  setInterval(function() {
      var i = Math.round((Math.random()) * hello.length);
      if (i === hello.length) --i;
      $("#hello").html("\"" + hello[i] + "\"");
  }, 5 * 500);
}
greeting();
});
//http://jsfiddle.net/brunolm/CDzXQ/ -- change text code.

$(function(){
    var hasBeenTrigged = false;
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 20 && !hasBeenTrigged) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.

//alert after scrolling 100px;
// confetti party - Code Pen
// http://codepen.io/Gthibaud/pen/bNOZjd

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
width = canvas.width = window.innerWidth;
height = canvas.height = 300;


// création d'un tableau
particle = [];
particleCount = 0,
gravity = 0.3,
    colors = [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
      '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
      '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
      '#FF5722', '#795548'
    ];



for( var i = 0; i < 300; i++){

particle.push({
	x : width/2,
	y : height/2,
	boxW : randomRange(5,20),
	boxH : randomRange(5,20),
	size : randomRange(2,8),

	spikeran:randomRange(3,5),

	velX :randomRange(-8,8),
	velY :randomRange(-50,-10),

	angle :convertToRadians(randomRange(0,360)),
	color:colors[Math.floor(Math.random() * colors.length)],
	anglespin:randomRange(-0.2,0.2),

	draw : function(){

		context.save();
            context.translate(this.x,this.y);
            context.rotate(this.angle);
		context.fillStyle=this.color;
		context.beginPath();
		// drawStar(0, 0, 5, this.boxW, this.boxH);
	context.fillRect(this.boxW/2*-1,this.boxH/2*-1,this.boxW,this.boxH);
		context.fill();
				context.closePath();
		context.restore();
	this.angle += this.anglespin;
    this.velY*= 0.999;
	this.velY += 0.3;

    this.x += this.velX;
    this.y += this.velY;
		if(this.y < 0){
	this.velY *= -0.2;
		this.velX *= 0.9;
	};
	if(this.y > height){
	this.anglespin = 0;
	this.y = height;
	this.velY *= -0.2;
		this.velX *= 0.9;
	};
		if(this.x > width ||this.x< 0){

	this.velX *= -0.0;
	};



	},




	});

} //close for loop

r1={
	velX :0,
	velY :0,
  alphatop:1
};


function drawScreen(){

		if(r1.alphatop < 1){
		r1.alphatop += 0.01;
		}else{
		r1.alphatop = 0;
		}
		context.globalAlpha = r1.alphatop;
			      context.textAlign = 'center';



 if(r1.alphatop === 1){
    r1.velY*= 0.999;
	  r1.velY += 0.3;

    r1.x += r1.velX;
    r1.y += r1.velY;}

		if(r1.y + r1.height > height){
    	  r1.anglespin = 0;
    	  r1.y = height - r1.height;
    	  r1.velY *= -0.8;
    		r1.velX *= 0.9;
	  };

    context.globalAlpha = 1;
		for( var i = 0; i < particle.length; i++){
			particle[i].draw();
    }
}


function update(){


context.clearRect(0,0,width,height);

drawScreen();

requestAnimationFrame(update);
}

update();


function randomRange(min, max){
	return min + Math.random() * (max - min );
}

function randomInt(min, max){
	return Math.floor(min + Math.random()* (max - min + 1));
}

       function convertToRadians(degree) {
            return degree*(Math.PI/180);
        }

		function drawStar(cx, cy, spikes, outerRadius, innerRadius,color) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    context.strokeSyle = "#000";
    context.beginPath();
    context.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y)
        rot += step
    }
    context.lineTo(cx, cy - outerRadius)
    context.closePath();
    context.fillStyle=color;
    context.fill();

}

    hasBeenTrigged = true;
   }
 });
});

//Click the hamburger menu to see the animation
//You can click the X to close or click anywhere outside the menu
//NAV codepen: https://codepen.io/joshuajcollinsworth/pen/NqqaXB
$(document).ready(function(){
	$('.hamburger-shell').click(function(){
		$('#nav').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#nav').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	})
});

// single page scroller

		$(document).ready(function() {
			$('#nav').onePageNav();
		});
