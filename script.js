//Gabriele Kukauskaite
//code takem from: https://staffwww.dcs.shef.ac.uk/people/S.Maddock/campus_only/com1008/lectureNotes.shtml
 
var context;
var intervalId;
var WIDTH;
var HEIGHT;
var balls;

//clears the path of a ball
function clear() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}
   
function initBalls() {
  balls = new BallList();
}
	
function drawCircle(){  
  var r = 10+Math.random()*20;
  var sx = Math.random()*WIDTH;
  var sy = Math.random()*HEIGHT;
  var dx = Math.random()*10-5;
  var dy = Math.random()*10-5;
  var red = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);  
  var c = "rgb("+red+","+green+","+blue+")";
  var ball = new Ball(sx,sy,r,dx,dy,c);
  balls.add(ball);
}

function drawBalls() {
  balls.draw(context);
}
    
function updateBalls() {
  for (var i = 0; i < balls.getNumBalls(); ++i) {
    var ball = balls.get(i);
    if (ball.getX() + ball.getDX()> WIDTH || ball.getX() + ball.getDX() < 0)
      ball.setDX(-ball.getDX());
    if (ball.getY() + ball.getDX() > HEIGHT || ball.getY() + ball.getDY() < 0)
      ball.setDY(-ball.getDY());
  }    
  for (var i = 0; i < balls.getNumBalls(); ++i) {
    var ball = balls.get(i);
    ball.setX( ball.getX() + ball.getDX() );
    ball.setY( ball.getY() + ball.getDY() );
  }
}    

function render() {
  clear();
      
  drawBalls();
      
  updateBalls();
}

function init() {
  context = $('#demo')[0].getContext("2d");
  WIDTH = $('#demo').width();
  HEIGHT = $('#demo').height();
  $('#demo').click(drawCircle);
	  
  initBalls();
      
  //start animation
  intervalId = setInterval(render, 10);
}
     
//when the Web page has loaded call the render function 
$(document).ready(init);
