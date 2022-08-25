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

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });
