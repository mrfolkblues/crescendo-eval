function initTopbar(){
	window.menu = {
		levelOne: false,
		levelTwo: false
	};

	var menuItems = $('#main_menu .menu-item');
	var submenus = $('.submenu-level-one, .submenu-level-two');

	setTimeout(function(){
		submenus.css({
			height: 'auto'
		});

		submenus.slideUp(0);
	}, 0);

	menuItems.click(onMenuClick);

	$('.submenu-level-one a').click(onSubmenuItemClick);
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
			$('.submenu-level-one li').removeClass('current');
			window.menu.levelTwo = false;
		}

		return false;
	}

	event.preventDefault();

	var rel = menuItem.attr('rel');
	var submenu = $('#' + rel);
	var submenuParent = submenu.parents('.submenu-level-two');

	$('.submenu-level-one li').removeClass('current');

	if (window.menu.levelTwo == false){
		// no menu open, set to the one clicked and open it
		window.menu.levelTwo = rel;
		menuItem.parents('li').addClass('current');
		submenuParent.slideDown(250);
	}else{
		// menu is open, close it
		$('#' + window.menu.levelTwo).parents('.submenu-level-two').slideUp(250);
		window.menu.levelTwo = false;
	}
}