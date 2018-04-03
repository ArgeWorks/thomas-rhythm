;(function($) {
	// Header on scroll
    const header = $('.header');

	const windowHeight = $(window).height();
    const headerHeight = header.outerHeight();

	function onScroll(e) {
	    let pos = $(window).scrollTop();

	    if (pos > 1) {
	        // header.css({
            //     'padding': '20px 0',
            //     'background': '#000',
            //     'transition': 'all .3s',
            // });
            $(".header").addClass("header-min")
	    }

	    if (pos < headerHeight) {
	        // header.css({
            //     'padding': '27px 0',
	        //     'background': 'transparent',
            // });
            $(".header").removeClass("header-min")
        }
	}

	$(window).on('scroll', onScroll);

})(jQuery);
