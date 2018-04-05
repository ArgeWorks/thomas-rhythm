;(function($) {
    // Header on scroll
    const header = $('.header');

    const windowHeight = $(window).height();
    const headerHeight = header.outerHeight();

    function onScroll(e) {
        let pos = $(window).scrollTop();

        if (pos > 1) {
            $(".header").addClass("header-min")
            $(".slicknav_nav").css({
                'top': '32px',
                'background-color': '#000',
                'border-color': '#777',
            });
            $(".slicknav_nav li + li").css({
                'border-color': '#777',
            });
        }

        if (pos < headerHeight) {
            $(".header").removeClass("header-min")
            $(".slicknav_nav").css({
                'top': '41px',
                'background-color': 'transparent',
                'border-color': '#bbb',
            });
            $(".slicknav_nav li + li").css({
                'border-color': '#bbb',
            });
        }
    }

    $(window).on('scroll', onScroll);
    $(window).on('load', onScroll);

})(jQuery);