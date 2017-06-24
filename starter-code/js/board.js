function Board() {
  this.score1 = 0;
  this.score2 = 0;
}

Board.prototype.start = function(){
  console.log("inicia el juego");
    var paddle1 = $('#paddle1');
    var paddle2 = $('#paddle2');
    var positionp1 = paddle1.position();
    var position2 = paddle2.position();
    console.log(positionp1);

};

Board.prototype.checkGame = function(){
};

Board.prototype.stop = function(){
};

Board.prototype.restart = function(){
};

Board.prototype.gameOver = function(){
};
