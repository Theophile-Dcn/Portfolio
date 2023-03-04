// MENU HAMBURGER

const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
});
  
// const hamburger span = document.querySelector('.hamburger');
const hamburger = document.querySelector('.hamburger');
menuHamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});

// BOUTON SCROLL TO VIDEO

const btn1 = document.querySelector('.scroll-btn');
const section2 = document.querySelector('#section2');

btn1.addEventListener('click', () => {
  section2.scrollIntoView({ behavior: 'smooth' });
});


// SLIDER 1 ( variete )

currentSlideID = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;


function next(){
if(currentSlideID < totalSlides) {
        currentSlideID++;
        showSlide()
    }
};

function prev(){
    if(currentSlideID > 1) {
        currentSlideID--;
        showSlide()
    }
};

function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li');
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if(currentSlideID===index+1){
            element.classList.remove('hidden')
        }else {
            element.classList.add('hidden')
        }
        
    }
};

// SCROLL BOUTON top 


  


// BUTTON SLIDER 2
currentSlideID2 = 1;

sliderElement2 = document.getElementById('slider2');
totalSlides2 = sliderElement2.childElementCount;



function next2(){
    if(currentSlideID2 < totalSlides2) {
            currentSlideID2++;
            showSlide2()
        }
    };
    
    function prev2(){
        if(currentSlideID2 > 1) {
            currentSlideID2--;
            showSlide2()
        }
    };

    function showSlide2() {
        slides2 = document.getElementById('slider2').getElementsByClassName('li-slider');
        for (let index = 0; index < totalSlides; index++) {
            const element = slides2[index];
            if(currentSlideID2===index+1){
                element.classList.remove('hidden')
            }else {
                element.classList.add('hidden')
            }
            
        }
    };

    // SWIPER 2

    var swiper = new Swiper(".mySwiper2", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
          loop: true,
        },
        pagination: '.swiper-pagination',
      });

    


    




  