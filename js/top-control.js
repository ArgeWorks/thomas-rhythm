;(function($) {
	// Hide Top-Control on top
    const topControl = $('.top-control');
    const inner = $('.inner');

	const windowHeight = $(window).height();
    const innerHeight = inner.outerHeight();

	function onScroll(e) {
	    let pos = $(window).scrollTop();
        
        if (pos < innerHeight) {
            topControl.css({
                'opacity': '0',
                'transition': 'all .3s',
            });
        }

        if (pos > (innerHeight / 2)) {
            topControl.css({
                'opacity': '1',
            });
        }
	}

	$(window).on('scroll', onScroll);

})(jQuery);
