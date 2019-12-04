// Navbar scroll 
/*$(window).scroll(function(){
    var scrollbar = $(window).scrollTop();
    if(scrollbar > 20) {
        $('.navbar').addClass('nav-scroll');
    } else {
        $('.navbar').removeClass('nav-scroll');
    }
})*/


// Owl Carousel in Banner
$('.banner-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    animateOut: 'zoomOut',
    animateIn: 'zoomIn',
    items:1,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.banner-slider').on("changed.owl.carousel", function(event){
    // selecting the current active item
    var item1 = event.item.index-2;
    // first removing animation for all captions
    $('h1').removeClass('animated fadeInUp');
    $('h4').removeClass('animated fadeInDown');
    $('.owl-item').not('.cloned').eq(item1).find('h1').addClass('animated fadeInUp');
    $('.owl-item').not('.cloned').eq(item1).find('h4').addClass('animated fadeInDown');
})

//Owl Carousel for Testimonials
$('.testimonials-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

