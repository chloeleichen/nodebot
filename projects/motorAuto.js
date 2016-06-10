let five = require('johnny-five');

let board;
let motor;

board = new five.Board();
board.on('ready', ()=>{
  motor = new five.Motor({
    pin: 9
  });
  // event handlers on start and stop
  motor.on('start', ()=>{
    console.log('started');
    board.wait(12000, function() {
      motor.stop();
    });
  }); 
  motor.on('stop', ()=>{
    console.log('stopped');
  });
  motor.start();
});
