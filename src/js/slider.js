function initSlider(selector){
	var slider = $(selector);
	var sliderCont = slider.children('.slides');
	var controls = $('.slider-controls');
	var active = 0;
	var pauseSlider = false;

	if (slider.length < 1){
		return false;
	}

	// position slides
	var slides = slider.find('.slide');

	slides.each(function(index, item){
		var slide = $(item);
		slide.css({
			position: 'absolute',
			left: (100 * index) + '%',
			top: 0
		});
	});

	// set active
	slides.first().addClass('active');
	controls.children('.dot').first().addClass('active');

	// run
	var int = setInterval(function(){
		sliderInterval();
	}, 5000);

	// navigate
	controls.children('.previous').click(clickPrevious);
	controls.children('.next').click(clickNext);
	controls.children('.dot').click(clickDot);

	function sliderInterval(){
		if (pauseSlider === true){
			return false;
		}

		active++;
		if (active >= slides.length){
			active = 0;
		}

		animateCont();
	}

	function pause(){
		pauseSlider = true;

		setTimeout(function(){
			pauseSlider = false;
		}, 5000);
	}

	function animateCont(){
		sliderCont.animate({
			left: (-100 * active) + '%'
		}, 500, 'swing', function(){
			slides.removeClass('active');
			controls.children('.dot').removeClass('active');

			slides.eq(active).addClass('active');
			controls.children('.dot').eq(active).addClass('active');
		});
	}

	function clickPrevious(){
		active--;
		if (active < 0){
			active = slides.length - 1;
		}
		animateCont();
		pause();
	}

	function clickNext(){
		active++;
		if (active >= slides.length){
			active = 0;
		}
		animateCont();
		pause();
	}

	function clickDot(){
		active = controls.children('.dot').index(this);
		animateCont();
		pause();
	}
}