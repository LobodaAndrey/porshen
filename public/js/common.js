$(function() {

	// Custom JS

});

$(document).ready(function(){
  $('.my-slider').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		arrows: false,
		responsive: [{
      breakpoint: 480,
      settings: "unslick"
    }],
  });
});

// ankors

$(document).ready(function(){
	$(".header-buttons").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});