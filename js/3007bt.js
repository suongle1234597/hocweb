$(document).ready(function () {
    $('.advertisement .owl-carousel').owlCarousel({
        items: 1,
        loop: true, //lap het tam hinh cuoi cung se ra tam hinh dau tien
        nav: true, //mui ten qua lai
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'], // no la cai mang. thay bang font awesome
        navSpeed: 300,
    });

    
    $('.futures-body .owl-carousel').owlCarousel({
        items: 5,
        nav: true, //mui ten qua lai
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'], // no la cai mang. thay bang font awesome
        navSpeed: 300,
    });

    $('.home').hover(function () {
            // over- khi hover zo
            $(this).find('.ul-dropdown').slideDown(); // xo xuong
        }, function () {
            // out - khi hover ra
            $(this).find('.ul-dropdown').slideUp();
        }
    );

    $('.pages').hover(function () {
        // over- khi hover zo

        $(this).find('.ul-droppage').slideDown(); // xo xuong
        $('.ul-droppage').css('opacity', '1');
    }, function () {
        // out - khi hover ra
        $(this).find('.ul-droppage').slideUp();

    });

   
});