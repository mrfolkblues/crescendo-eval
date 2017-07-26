function initTopbar(){
	window.menu = {
		levelOne: false,
		levelTwo: false,
		locator: false
	};

	var menuItems = $('#main_menu .menu-item');
	var submenus = $('.submenu-level-one, .submenu-level-two');
	var locator = $('#locator');

	setTimeout(function(){
		submenus.css({
			height: 'auto'
		});

		locator.css({
			height: 'auto'
		});

		submenus.slideUp(0);
		locator.slideUp(0);
	}, 0);

	menuItems.click(onMenuClick);

	$('.submenu-level-one a').click(onSubmenuItemClick);
	$('#where_to_buy').click(onLocatorClick);

	$(document).click(function(event){
	    if (!$(event.target).closest('#main_menu, .submenu-level-one, .submenu-level-two').length){
	        if ($('.submenu-level-one, .submenu-level-two').is(":visible")){
	        	window.menu.levelOne = false;
				window.menu.levelTwo = false;
				$('.menu-item').removeClass('current');
				$('.submenu-level-one').removeClass('submenu-open');
				$('.submenu-level-one li').removeClass('current');
	        	$('.submenu-level-one').slideUp(250);
	            $('.submenu-level-two').slideUp(250);
	        }
	    }

	    if (!$(event.target).closest('#locator, #where_to_buy').length){
	        if (locator.is(":visible")){
	        	locator.slideUp(250);
	        	window.menu.locator = false;
	        }
	    }
	});
}

function onMenuClick(event){
	if (winW < breakpoint){
		return false;
	}

	var menuItem = $(this);

	if (!menuItem.attr('rel')){
		if (window.menu.levelOne != false){
			$('#' + window.menu.levelOne).parents('.submenu-level-one').slideUp(250);
			$('.submenu-level-two').slideUp(250);
			$('.menu-item').removeClass('current');
			$('.submenu-level-one').removeClass('submenu-open');
			$('.submenu-level-one li').removeClass('current');
			window.menu.levelOne = false;
			window.menu.levelTwo = false;
		}

		return false;
	}

	event.preventDefault();

	var rel = menuItem.attr('rel');
	var submenu = $('#' + rel);
	var submenuParent = submenu.parents('.submenu-level-one');

	$('.menu-item').removeClass('current');
	$('.submenu-level-one').removeClass('submenu-open');
	$('.submenu-level-one li').removeClass('current');

	if (window.menu.levelOne == false){
		// no menu open, set to the one clicked and open it
		window.menu.levelOne = rel;
		menuItem.addClass('current');
		submenuParent.slideDown(250);
	}else{
		// menu is open, close it
		$('#' + window.menu.levelOne).parents('.submenu-level-one').slideUp(250);
		$('.submenu-level-two').slideUp(250);
		window.menu.levelOne = false;
		window.menu.levelTwo = false;
	}
}

function onSubmenuItemClick(event){
	if (winW < breakpoint){
		return false;
	}

	var menuItem = $(this);

	if (!menuItem.attr('rel')){
		if (window.menu.levelTwo != false){
			$('#' + window.menu.levelTwo).parents('.submenu-level-two').slideUp(250);
			$('.submenu-level-one').removeClass('submenu-open');
			$('.submenu-level-one li').removeClass('current');
			window.menu.levelTwo = false;
		}

		return false;
	}

	event.preventDefault();

	var rel = menuItem.attr('rel');
	var submenu = $('#' + rel);
	var submenuParent = submenu.parents('.submenu-level-two');

	$('.submenu-level-one').removeClass('submenu-open');
	$('.submenu-level-one li').removeClass('current');

	if (window.menu.levelTwo == false){
		// no menu open, set to the one clicked and open it
		window.menu.levelTwo = rel;
		menuItem.parents('li').addClass('current');
		$('.submenu-level-one').addClass('submenu-open');
		submenuParent.slideDown(250);
	}else{
		// menu is open, close it
		$('#' + window.menu.levelTwo).parents('.submenu-level-two').slideUp(250);
		window.menu.levelTwo = false;
	}
}

function onLocatorClick(event){
	if (winW < breakpoint){
		return false;
	}
	
	event.preventDefault();

	if (window.menu.locator == false){
		window.menu.locator = true;
		$('#locator').slideDown(250);
	}else{
		window.menu.locator = false;
		$('#locator').slideUp(250);
	}
}