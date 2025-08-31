document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('mainVideo');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const stopBtn = document.getElementById('stopBtn');
  const progressBar = document.getElementById('progressBar');
  const progress = document.getElementById('progress');

  playBtn.addEventListener('click', function () {
    video.play();
  });

  pauseBtn.addEventListener('click', function () {
    video.pause();
  });

  stopBtn.addEventListener('click', function () {
    video.pause();
    video.currentTime = 0;
  });

  // Update progress bar as video plays
  video.addEventListener('timeupdate', function () {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = percent + "%";
  });

  // Seek when clicking the progress bar
  progressBar.addEventListener('click', function (e) {
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    video.currentTime = percent * video.duration;
  });
});