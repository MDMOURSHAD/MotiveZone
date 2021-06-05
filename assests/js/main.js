
// PRELOADER 

function loading(){

  var loading = document.getElementsByClassName('preloader');

  loading[0].style.display = "none";

}

// MOBILE MENU 

function openNav(){
	document.getElementById("mynav").style.width = "100%";
}

function closeNav(){
	document.getElementById("mynav").style.width = "0%";
}

// WOW JS

new WOW().init();

$(document).ready(function(){

	// STICKY MENU 

	$(window).scroll(function(){

		if($(this).scrollTop() > 100){

			$('.nav').addClass('sticky');
	}

		else{
			$('.nav').removeClass('sticky');
	}

	});

  // TOP TO SCROLL 

  $(window).scroll(function(){

  if($(this).scrollTop() > 100){

    $('.scroll-top').fadeIn();

  }

  else{

    $('.scroll-top').fadeOut();

  }


  });

  // SWIPER JS

   // var swiper = new Swiper('.swiper-container', {
    
   //    autoplay: {
   //      delay: 2500,
   //      disableOnInteraction: false,
   //    },
   //    navigation: {
   //      nextEl: '.swiper-button-next',
   //      prevEl: '.swiper-button-prev',
   //    },

   //  });

});