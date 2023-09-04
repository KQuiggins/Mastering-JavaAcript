const audio = document.querySelector('#audio');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const volume = document.querySelector('#volume');
const currentTime = document.querySelector('#current-time');

play.addEventListener('click', () => {
    console.log('play');
    audio.play();
});

pause.addEventListener('click', () => {
  audio.pause();
});

stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

audio.addEventListener('timeupdate', () => {
  currentTime.innerHTML = audio.currentTime;
});

volume.addEventListener('change', () => {
  audio.volume = volume.value;
});