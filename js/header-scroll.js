;(function($) {
	// Header on scroll
    const header = $('.header');

	const windowHeight = $(window).height();
    const headerHeight = header.outerHeight();

	function onScroll(e) {
	    let pos = $(window).scrollTop();

	    if (pos > 1) {
	        header.css({
                'padding': '20px 0',
                'background': 'rgba(0, 0, 0, .85)',
                'transition': 'all .3s',
            });
            
	    }

	    if (pos < headerHeight) {
	        header.css({
                'padding': '27px 0',
	            'background': 'transparent',
	        });
        }
	}

	$(window).on('scroll', onScroll);

})(jQuery);
