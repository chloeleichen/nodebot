import five from 'johnny-five';
import setupLeap from '../tools/setupLeap';

let board;
let motor;

board = new five.Board();

board.on('ready', function() {
  setUpMotor(controlMotor);
  setupLeap();
    // event handlers on start and stop
  motor.on('start', (err, timestamp)=>{
    if (err) {
      throw err;
    } else {
      console.log('started', timestamp);
    }
  });
  motor.on('stop', (err, timestamp)=>{
    if (err) {
      throw err;
    } else {
      console.log('stopped', timestamp);
    }
  });
});

function setUpMotor() {
  motor = new five.Motor({pin: 9});
}

function controlMotor(frame) {
  if (frame.hands.length) {
    motor.start();
  } else {
    motor.stop();
  }
}
