'usestrict';

var audio = document.getElementById('lecture-audio');
var start = document.getElementById('audio-start');
var pause = document.getElementById('audio-pause');

function handleAudioStart() {
  audio.play();
}

function handleAudioPause() {
  audio.pause();
}

start.addEventListener('click', handleAudioStart);
pause.addEventListener('click', handleAudioPause);
