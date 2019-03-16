jQuery(function ($) {

    var burgerMenu = document.getElementById('burger-menu');
    var overlay = document.getElementById('menu');
    burgerMenu.addEventListener('click', function () {
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });

    $('#box1').click(function () {
        $('#iddiv1').toggle($(this).prop('checked'));
    });

    $('#box2').click(function () {
        $('#iddiv2').toggle($(this).prop('checked'));
    });

    $('#box3').click(function () {
        $('#iddiv3').toggle($(this).prop('checked'));
    });
    






    var $status = $('.pagingInfo');
    var $slickElement = $('.slideshow');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' / ' + slick.slideCount);
    });

    $slickElement.slick({
        infinite: false
    });




});

$(document).ready(function () {
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if ($.browser) {
            $('body').animate({scrollTop: destination}, 1100); //1100 - скорость
        } else {
            $('html').animate({scrollTop: destination}, 1100);
        }
        return false;
    });
});



