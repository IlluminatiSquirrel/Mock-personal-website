//Gabriele Kukauskaite
//code takem from: https://staffwww.dcs.shef.ac.uk/people/S.Maddock/campus_only/com1008/lectureNotes.shtml

// A single Ball

function Ball(x,y,r,dx,dy,c) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.dx = dx;
  this.dy = dy;
  this.c = c;
}

Ball.prototype.draw = function(context) {
  context.fillStyle = this.c;
  context.beginPath();
  context.arc(this.x,this.y,this.r, 0, Math.PI*2, true);
  context.closePath();
  context.fill();
}

Ball.prototype.setX = function(x) {
  this.x = x;
}

Ball.prototype.setY = function(y) {
  this.y = y;
}

Ball.prototype.setR = function(r) {
  this.r = r;
}

Ball.prototype.setDX = function(dx) {
  this.dx = dx;
}

Ball.prototype.setDY = function(dy) {
  this.dy = dy;
}

Ball.prototype.setColor = function(c) {
  this.c = c;
}
  
Ball.prototype.getX = function() {
  return this.x;
}

Ball.prototype.getY = function() {
  return this.y;
}

Ball.prototype.getR = function() {
  return this.r;
}

Ball.prototype.getDX = function() {
  return this.dx;
}

Ball.prototype.getDY = function() {
  return this.dy;
}

Ball.prototype.getColour = function() {
  return this.c;
}

// Then, all the balls

BallList.MAX_NUMBALLS = 100;

function BallList() {
  this.balls = new Array(BallList.MAX_NUMBALLS);
  this.numBalls = 0;
}

BallList.prototype.getNumBalls = function() {
  return this.numBalls;
}

BallList.prototype.add = function(b) {
  if (this.numBalls>=BallList.MAX_NUMBALLS) {
    console.log("too many balls");
    return;
  }
  this.balls[this.numBalls] = b;
  this.numBalls++;
}

BallList.prototype.get = function(i) {
  if (i >= this.numBalls) return 0;
  return this.balls[i];
}

BallList.prototype.draw = function(context) {
  for (var i=0; i<this.numBalls; i++) {
    this.balls[i].draw(context);
  }
}