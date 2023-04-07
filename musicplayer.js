let audio = document.getElementById("audio");
let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let songs = document.querySelectorAll(".song");

let currentSong = 0;

playBtn.addEventListener("click", function() {
  audio.play();
});

pauseBtn.addEventListener("click", function() {
  audio.pause();
});

songs.forEach(function(song, index) {
  song.addEventListener("click", function() {
    currentSong = index;
    audio.src = "song" + (index + 1) + ".mp3";
    audio.play();
  });
});

audio.addEventListener("ended", function() {
  currentSong++;
  if (currentSong == songs.length) {
    currentSong = 0;
  }
  audio.src = "song" + (currentSong + 1) + ".mp3";
  audio.play();
});
