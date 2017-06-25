function Paddle(x, y) {
  this.x = x;
  this.y = y;
}
Paddle.prototype.restart = function() {


};

Paddle.prototype.hitBall = function(ball_y) {

};

Paddle.prototype.moveUp = function(positionY) {
  var speed = 10;
  $('#paddle1').css('top', positionY - speed);


};

Paddle.prototype.moveDown = function(positionY) {
  var speed = 10;
  $('#paddle1').css('top', positionY + speed);
};
