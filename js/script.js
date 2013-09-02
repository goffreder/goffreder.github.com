var animEndEventNames = {
		'WebkitAnimation' : 'webkitAnimationEnd',
		'OAnimation' : 'oAnimationEnd',
		'msAnimation' : 'MSAnimationEnd',
		'animation' : 'animationend'
	},
	// animation end event name
	animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

var animation = function(leavingDiv, leavingAnimation, enteringDiv, enteringAnimation, language, newLanguage) {
	leavingDiv.addClass(leavingAnimation).on(animEndEventName, function() {
		leavingDiv.removeClass(leavingAnimation);
		leavingDiv.find("." + language).hide();
		enteringDiv.find("." + newLanguage).show();
		enteringDiv.addClass(enteringAnimation).on(animEndEventName, function() {
			enteringDiv.removeClass(enteringAnimation);
		});
	});
};
