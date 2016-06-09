import leapMotion from 'leapjs';
let initialFrame = null;
function setupLeap(callback) {
    let leapController = new leapMotion.Controller({enableGestures: true});
    leapController.on("frame", function(frame) {
        receivedFrame(frame);
    });
    leapController.connect();
    function receivedFrame(frame) {
        // why?
        if (!initialFrame) {
            initialFrame = frame;
        }
        else {
            callback(frame);
        }
    }
}

module.exports = setupLeap;
