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
