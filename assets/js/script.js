$(function() {
    let header = $('#header');
    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    // Fixed Header 
    checkScroll(scrollOffset);

    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {

        if(scrollOffset >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    // Smooth Scroll
    $('[data-scroll]').on('click',  function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockOffset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    // Menu Nav toggle
    $("#nav_toggle").on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    $("#nav a").on('click', function(event) {
        event.preventDefault();
        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
    });

    // Collapse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let blockId = $this.data('collapse');

        $this.toggleClass("active");
        $(blockId).slideToggle();
    });

    // Slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});