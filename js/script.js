$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		dots: true,
		speed: 300,
		slidesToShow: 3,
		
		responsive: [
		  {
		    breakpoint: 1200,
		    settings: {
		      slidesToShow: 3,
		      slidesToScroll: 3,
		      infinite: true,
		      dots: true
		    }
		  },
		  {
		    breakpoint: 700,
		    settings: {
		      slidesToShow: 2,
		      slidesToScroll: 2
		    }
		  },
		  {
		    breakpoint: 570,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1
		    }
		  }
		
		]
});		
});


new WOW().init();










