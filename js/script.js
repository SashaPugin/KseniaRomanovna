

$(document).ready(function() {
	$('.item').magnificPopup({
		// delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		});
	});

	$('.sl').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 600,
		zIndex: 0,
		asNavFor: '.sl2',
		initialSlide: 4,
  });

  $('.sl2').slick({
		dots: true,
		zIndex: 0,
		asNavFor: '.sl',
		focusOnSelect: true,
		slidesToShow: 7,
		initialSlide: 4,
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				dots: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				dots: false,
			}
		}
		]

  });
	
	// $(document).ready(function(){
	// 	var $element = $('.footer');
	// 	let counter = 0;
	// $(window).scroll(function() {
	// 	var scroll = $(window).scrollTop() + $(window).height();
	// 	var offset = $element.offset()

	// 	if (scroll > offset.top && counter == 0){
	// 		$('#block').fadeIn(500);
	// 		counter = 1;
	// 	}
	// });
	// $('but').click(function(){
	// 	$('#block').slideUp();
	// });
	// });

// var p = $('.page_layout');
// var offset = p.offset();
// p.html('left:' + offset.left + 'top:' + offset.top);

	$(document).ready(function(){
		var $element = $('header ul');
		var scroll = $(window).scrollTop();
		var offset = $element.offset().top+$element.height();

		if($(window).width()>1044 && scroll > offset){
			$('aside').css('display', 'block');
		} 
	});

	var $element = $('header ul');
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var offset = $element.offset().top+$element.height();

		if($(window).width()>1044 && scroll > offset){
			$('aside').css('display', 'block');
		} 
	});

	var $element = $('header ul');
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var offset = $element.offset().top+$element.height();

		if($(window).width()>1044 && scroll < offset){
			$('aside').css('display', 'none');
		} 
	});


	// var $element2 = $('aside');
	// $(window).scroll(function(){
	// 	var scroll2 = $(window).scrollTop();
	// 	var offset2 = $element2.offset().top+600;

	// 	if(scroll2 < offset2){
	// 		$('aside').css('display', 'none');
	// 	}
	// })

// })