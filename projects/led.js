import five from 'johnny-five';
import setupLeap from '../tools/setupLeap';

let board;
let led;

board = new five.Board();

board.on('ready', function() {
  setUpLed(this);
  setupLeap(controlLed);
});

function setUpLed(_board) {
  led = new five.Led(13);
  _board.pinMode(13, board.MODES.OUTPUT);
  // make led available as "led" in REPL
  _board.repl.inject({
    led: led
  });
}

function controlLed(frame) {
  if (frame.hands && frame.hands.length >= 1) {
    led.on();
    console.log('on');
  }
  else {
    led.off();
    console.log('off');
  }
}
