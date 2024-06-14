const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const musicMenu = document.querySelector(".music-menu");
const songs = [
  "Evening Melodrama.mp3",
  "Exciting Trailer.mp3",
  "Our Story Begins.mp3",
]; // 請替換為你的歌曲

let currentSongIndex = 0;
let isPlaying = false;

function playPause() {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.innerHTML = "&#9658;";
  } else {
    audioPlayer.play();
    playPauseBtn.innerHTML = "&#9616;&#9616;";
  }
  isPlaying = !isPlaying;
}

function playSong(index) {
  currentSongIndex = index - 1;
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
  isPlaying = true;
  playPauseBtn.innerHTML = "&#9616;&#9616;";
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
  isPlaying = true;
  playPauseBtn.innerHTML = "&#9616;&#9616;";
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
  isPlaying = true;
  playPauseBtn.innerHTML = "&#9616;&#9616;";
}
