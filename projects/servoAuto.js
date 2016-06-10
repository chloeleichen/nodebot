let five = require('johnny-five');

let board;
let servo;
board = new five.Board();
board.on('ready', function() {
  servo = new five.Servo(9);

  board.repl.inject({
    servo: servo
  });

  servo.sweep();

  this.wait(5000, function() {
    servo.stop();
    servo.center();
  });
});
