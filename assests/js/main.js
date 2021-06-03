

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


    //  var swiper = new Swiper('.swiper-container', {
    //   spaceBetween: 30,
    //   centeredSlides: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });


	
});