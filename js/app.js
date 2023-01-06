//banner slider activation
$(function(){
    $('.banner_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
        speed:2000,
        dots:true,
        dotsClass:'banner_slider_dots'
    })
})

//product slick slider activa
$(function(){
    $('.product_slider').slick({
        // autoplay:true,
        // autoplaySpeed:800,
        // speed:2000,
        slidesToShow:4,
        slidesToScroll:4,
        prevArrow:'<i class="fa-solid fa-chevron-left product_slider_arrows" id="prevArrow"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right product_slider_arrows" id="nextArrow"></i>'
    })
})

//countdown activation
$(function(){
    $('#deals_countdown').countdown('2023/01/10', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div class="d-inline-block text-center px-3 deals_countdown_item"><span class="d-block number_span">%D</span><span>Days</span></div> '
          +'<span class="colon">:</span>'
          + '<div class="d-inline-block text-center px-3 deals_countdown_item"><span class="d-block number_span">%H</span><span>Hours</span></div> '
          +'<span class="colon">:</span>'+
          '<div class="d-inline-block text-center px-3 deals_countdown_item"><span class="d-block number_span">%M</span><span>Minutes</span></div>'
          +'<span class="colon">:</span>'+
           '<div class="d-inline-block text-center px-3 deals_countdown_item"><span class="d-block number_span">%S</span><span>Seconds</span></div>'
        ));
      });
})
//deals slider activation
$(function(){
    $('.deals_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
        speed:2000,
        slidesToShow:2,
        dots:true,
        dotsClass:'deals_slider_dots'
    })
})
// venobox of video activation
new VenoBox({
    selector: '.venobox_play',
});
//news slider activation
$(function(){
    $('.news_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
        speed:2000,
        slidesToShow:4,
        dots:true,
        dotsClass:'news_slider_dots'
    })
})