$('.gallery-carousel').slick({
	centerMode: true,
	centerPadding: '10%',
	slidesToShow: 1,
	pauseOnHover: false,
	arrows: false,
	autoplay: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1,
			},
		},
	],
});
