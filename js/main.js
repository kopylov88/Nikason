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

const hamb = document.querySelector('.hamb');
const hambMenu = document.querySelector('.hamb-menu');
const body = document.querySelector('body');
const hambLinks = document.querySelectorAll('.hamb-menu__link');

hamb.addEventListener('click', function(){
  hamb.classList.toggle('clicked');
  hambMenu.classList.toggle('active');
  body.classList.toggle('noscroll');
})

hambLinks.forEach(function(item){
  item.addEventListener('click', function(){
    hamb.classList.remove('clicked');
    hambMenu.classList.remove('active');
    body.classList.remove('noscroll');
  })
})
