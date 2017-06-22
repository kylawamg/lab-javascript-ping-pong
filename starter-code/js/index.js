var board = new Board();
var ball = new Ball();
var paddle = new Paddle();
$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}

$(document).on('keydown', function(e){
    var positionY =  $('#paddle1').position().top;
  switch (event.keyCode) {
   case 38: console.log(positionY);
   if (positionY < 1) {
     return;
   }
      paddle.moveUp(positionY);
      break;
   case 40: console.log(positionY);
   if (positionY > 399){
     return;
   }
    paddle.moveDown(positionY);
   break;
 }
});

function activatePaddle2() {
}

function renderGame(){

}

function renderScore(){
}

function renderBall(){
}

function renderPaddle(){
}
