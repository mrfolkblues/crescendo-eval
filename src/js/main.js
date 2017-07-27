(function($){
	$(document).ready(function(){
		// initialize Foundation
		$(document).foundation();

		// initialize custom features
		initResize();
		initTopbar();
		initSlider('.custom-slider');
	});
})(jQuery);