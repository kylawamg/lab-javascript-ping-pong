function Ball(x, y, paddle1, paddle2) {
  this.x = x;
  this.y = y;

  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
  this.direction = 0;

}

Ball.prototype.randomDirection = function() {
  var direction = Math.floor(Math.random * 4);
  return direction;
};

Ball.prototype.move = function(direction) {

  this.direction = direction;
  var that = this;
  var interVal = setInterval(function() {
    // 1 up 2 right 3 down 4 left
    var ball = $('#ball');
    var ballpositionY = $('#ball').position().top;
    var ballpositionX = $('#ball').position().left;
    var speed = 5;

    switch (that.direction) {
      case 1:
        if (ballpositionY < 5) {
          //  ball.css('top', ballpositionY += speed);
          that.direction = 3;
        } else {
          ball.css('top', ballpositionY -= speed);
        //  ball.css('left', ballpositionX -= 2);
          console.log();
        }

        break;
      case 2:
        ball.css('left', ballpositionX += speed);
        break;
      default:
      case 3:
        if (ballpositionY > 480) {
          that.direction = 1;
        }else{
            ball.css('top', ballpositionY += speed);
        }


        break;
      case 4:
        ball.css('left', ballpositionX -= speed);
        break;
    }
  }, 10);
};


Ball.prototype.pointScored = function() {};

// returns winner paddle or false
Ball.prototype.winner = function() {};

Ball.prototype.restart = function() {

};
