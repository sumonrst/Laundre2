

$(document).ready(function(){
    $('.banner-area').slick({
        // infinite: true,
        // loop: true,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-right"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-left"></i></button>',
        autoplay: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }

          ]
        
    });


    $('.blog-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    autoplay: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
    ]
});

    
    $('.cleaning-main').slick({
        autoplay: true,
        slidesToShow:4,
        arrows: false,
        dots:true,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    /* Slick Nav Menu */ 
    $('#nav').slicknav();

  });








