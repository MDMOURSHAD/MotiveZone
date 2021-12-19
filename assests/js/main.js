
//-- PRELOADER --//

function loading(){

  var loading = document.getElementsByClassName('preloader');

  loading[0].style.display = "none";

}

//-- MOBILE MENU --//

const menuIcon = document.querySelector('.hamburger-menu');
const navlist = document.querySelector('.nav-list');

menuIcon.addEventListener("click", () => {

  menuIcon.classList.toggle('change');
  navlist.classList.toggle('slide-menu');
  
});

function myFunction(){

  menuIcon.classList.remove('change');
  navlist.classList.remove('slide-menu');
  
}


//-- WOW JS --//

new WOW().init();

$(document).ready(function(){

	//-- STICKY MENU --//

	$(window).scroll(function(){

		if($(this).scrollTop() > 100){

			$('.nav').addClass('sticky');
	}

		else{
			$('.nav').removeClass('sticky');
	}

	});

  //-- TOP TO SCROLL --//

  $(window).scroll(function(){

  if($(this).scrollTop() > 100){

    $('.scroll-top').fadeIn();

  }

  else{

    $('.scroll-top').fadeOut();

  }


  });

  //-- SWIPER JS --//

   var swiper = new Swiper('.swiper-container', {
    
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed:1200,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

});