var context = new AudioContext(); // Create audio container

oscillator = context.createOscillator(); // Create sound source
gainNode = context.createGain(); // Create boost pedal
oscillator.connect(gainNode); // Connect bass guitar to boost pedal
oscillator.connect(context.destination); // Connect sound to speakers
gainNode.gain.value = 0.3; // Set boost pedal to 30 percent volume
oscillator.frequency.value = 100; // Frequency in hertz
oscillator.start(); // Generate sound instantly

var videoInput = document.getElementById('inputVideo');
var canvasInput = document.getElementById('inputCanvas');

var htracker = new headtrackr.Tracker();
htracker.init(videoInput, canvasInput);
htracker.start();



document.addEventListener('facetrackingEvent',
function (event) {
  oscillator.frequency.value = event.x * 2;
}
);
