@@include('./partials/remodal.js')

$(function (){
    $('.js-burger').on('click', function (){
        $(this).toggleClass('active');
        $('.galacenter-create-menu__list').toggleClass('active');
    })

    $('a[href^="#"]').on('click', function (event) {
        let sc = $(this).attr("href");
        let dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
        return false;
    });
})
