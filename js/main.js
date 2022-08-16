const videoBtn = document.querySelector('.play-btn');
const videoPic = document.querySelector('.video__img');
const video = document.querySelector('.video__clip');

videoBtn.addEventListener('click', function(){
    video.play();
    videoBtn.classList.add('none');
    videoPic.classList.add('none');
})
video.addEventListener('click', function(){
  if(video.paused){
    videoBtn.classList.add('none');
    videoPic.classList.add('none');
    video.play();
  }
  else{
    videoBtn.classList.remove('none');
    videoPic.classList.remove('none');
    video.pause();
  }
})