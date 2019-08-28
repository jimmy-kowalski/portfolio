$(document).ready(function () {
    // mobilni prikaz menu
    $('.menu-toggle').click(function () {
        $(this).toggleClass('open');
        $('.overlay').toggleClass('open');
        $('nav').toggleClass('open');
    });

    $('.nav-link').click(function () {
        $('.overlay').removeClass('open');
        $('nav').removeClass('open');
        $('.menu-toggle').removeClass('open');
    });

    // getting each path length
    const $logoPaths = $('#logo path');
    // console.log($logoPaths); 

    $logoPaths.each(function (i, path) {
        console.log(`Letter ${i} is ${$logoPaths[i].getTotalLength()}`);
    });

    // skills animacija
    var offsetTop = $('.skills').offset().top;

    $(window).scroll(function () {
        var height = $(window).height();

        if ($(window).scrollTop() + height > offsetTop) {
            $('.skill-bar').each(function () {
                $(this).find('.progress').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
        }
    });

    // smooth scrolling
    $('.nav-link').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
    });

    // scrolling to top
    $('#up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    // scrolling to bottom
    $('.btn-info').click(function () {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 1000);
        return false;
    });

});