$( function() {
    // Init Tabs Services
    $("#tabs-services").tabs();
    // Init Tabs Portfolio
    $("#tabs-portfolio").tabs();

    // Init Slick Slider
    $(".reviews-slider").slick({
        dots: true,
        prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left" aria-hidden="true"></i></div></div>',
        nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right" aria-hidden="true"></i></div></div>',
    });
});