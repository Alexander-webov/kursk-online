$(document).ready(function () {


    $('.slider__items').slick({
        infinite: true,
        edgeFriction: true,
        centerPadding: '40px',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./images/slide-btn-prev.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./images/slide-btn-next.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    })

    $(".phone-mask").mask("+7 (999) 999-99-99");
    /* desctop menu*/
    var men = true;
    $(".main__menu").click(function () {
        if (men == false) {
            $(".menu").slideUp();
            men = !men;
        }
        else {
            $(".menu").slideDown();
            men = !men;
        }
    });
    $('.menu__inner > .close__menu').click(function () {
        if (men == false) {
            $(".menu").slideUp();
            men = !men;
        }
        else {
            $(".menu").slideDown();
            men = !men;
        }
    })


    var men_mob = true;
    /* mob menu*/
    $(".main__menu-mob").click(function () {
        if (men_mob == false) {
            $(".menu-mob").slideUp();
            men_mob = !men_mob;
        }
        else {
            $(".menu-mob").slideDown();
            men_mob = !men_mob;
        }
    });

    $('.close__menu2').click(function () {
        console.log(1);
        if (men_mob == false) {
            $(".menu-mob").slideUp();
            men_mob = !men_mob;
        }
        else {
            $(".menu-mob").slideDown();
            men_mob = !men_mob;
        }
    })

    /*     $('.menu__mob-btn').click(function () {
            $(this).next($('.menu-mob__list')).toggleClass('menu-mob__list-active');
            $(this).toggleClass('menu__mob-btn-active');
        });
     */

    if (window.screen.width < 769) {


        $('.rate__items').slick({
            infinite: true,
            prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/slide-btn-prev.svg" alt="arrow"></button>',
            nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/slide-btn-next.svg" alt="arrow"></button>',
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,

                    }
                }
            ]

        });




        $('.localPhone__items').slick({
            infinite: true,
            prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/slide-btn-prev.svg" alt="arrow"></button>',
            nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/slide-btn-next.svg" alt="arrow"></button>',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,

                    }
                }
            ]
        });


    }
    if (window.innerWidth < 600) {
        $('.TVmore__block-inner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/slide-btn-prev.svg" alt="arrow"></button>',
            nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/slide-btn-next.svg" alt="arrow"></button>',

            responsive: [
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                }
            ]
        });
    }
    $('.btn-modal').magnificPopup();




});