function Ball(paddle1, paddle2) {
  this.x = 490;
  this.y = 240;
  this.directionX = 'left';
  this.directionY = 'top';
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
  this.direction = 1;

}

Ball.prototype.randomDirection = function() {
  var direction = Math.floor(Math.random * 4);
  return direction;
};

Ball.prototype.move = function() {

  var that = this;
  var interVal = setInterval(function() {
    that.pointScored();
    // 1 up 2 right 3 down 4 left
    var ball = $('#ball');
    var ballpositionY = $('#ball').position().top;
    var ballpositionX = $('#ball').position().left;
    var speed = 5;
    console.log("X: " + ballpositionX + " y: " + ballpositionY + "direction " + that.direction);
    switch (that.direction) {
      case 1:
        if (ballpositionY > 2 && ballpositionX < 998) {
          ball.css('top', ballpositionY -= speed);
          ball.css('left', ballpositionX += speed);

        } else if (ballpositionY < 3) {
          that.direction = 2;
        } else {
          that.direction = 2;
        }
        break;
      case 2:
        if (ballpositionY < 493 && ballpositionX < 998) {
          ball.css('top', ballpositionY += speed);
          ball.css('left', ballpositionX += speed);
        } else if (ballpositionY > 493) {
          that.direction = 1;
        } else {
          that.direction = 3;
        }
        break;
      case 3:
        if (ballpositionX > 30 && ballpositionY < 490) {
          ball.css('top', ballpositionY += speed);
          ball.css('left', ballpositionX -= speed);
        } else if (ballpositionX < 25) {
          that.direction = 4;
        } else {
          that.direction = 4;
        }
        break;
      case 4:
        if (ballpositionY > 2 && ballpositionX > 2) {
          ball.css('top', ballpositionY -= speed);
          ball.css('left', ballpositionX -= speed);
        } else if (ballpositionX < 5) {
          that.direction = 2;
        } else {
          that.direction = 3;
        }
        break;
    }

  }, 10);

};


Ball.prototype.pointScored = function() {
  var paddle1x = $('#paddle1').position().left;
  var paddle2x = $('#paddle2').position().left;
  var paddle1y = $('#paddle1').position().top;
  var paddle2y = $('#paddle2').position().top;
  var ballpositionY = $('#ball').position().top;
  var ballpositionX = $('#ball').position().left;
  paddlewidth = 30;
  height = 100;

  console.log("xBall " + ballpositionX);
  console.log("yBall " + ballpositionY);
  if ((ballpositionX < paddlewidth) && (ballpositionY > paddle1y) && (ballpositionY < paddle1y + 100)) {
console.log("rebot");
  } else if (ballpositionX < 1 ) {
    alert('gikd');
  } else {
    console.log('nada');
  }
};

// returns winner paddle or false
Ball.prototype.winner = function() {};

Ball.prototype.restart = function() {

};
