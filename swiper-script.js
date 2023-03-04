var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    coverflow: {
 rotate: 20,
 stretch: 0,
 depth: 200,
 modifier: 1,
 slideShadows: true,
    },
    loop: true,
 }) ;

//  BOUTON SCROLL TOP 

const scrollBtn = document.querySelector('#scrollBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


