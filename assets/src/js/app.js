$(window).on('load', function(){
    let swiper;
    if( $('.featherlight-link').length ){
        $('.featherlight-link').on('click', function(){
            $(this).featherlight({
                targetAttr: 'href',
                afterOpen: function(event){
                    swiper = new Swiper(this.$content.find('.swiper-container')[0], {
                        loop: true,
                        autoplay: {
                            delay: 2500,
                            disableOnInteraction: false,
                        },
                    });
                },
                afterClose: function(event){
                    swiper.destroy();
                }
            });            
        });
    }
});

// on Scroll change menu link is active
$(window).scroll(function(){
    let current_point = $(this).scrollTop();
    let active_el = null;
    let current_active_el = $('.header .nav-link.active');

    $('.header .nav-link').each(function (index) {
        let aTop = ($($(this).attr('href')).offset() == undefined)? 0 : $($(this).attr('href')).offset().top;
        if(current_point >= aTop){
            active_el = $(this);
        }
    });

    if( current_active_el.text() != active_el.text() ){
        $('.header .nav-link').removeClass('active');
        active_el.addClass('active');
    }
});

$(function() {
    $('.header a').bind('click',function(event){
        let $anchor = ($($(this).attr('href')).offset() == undefined)? 0 : $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({
            scrollTop: $anchor
        }, 1000);       

    });
});

let fades = null;
const fade_observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
};

document.addEventListener("DOMContentLoaded", function () {
    fades = document.querySelectorAll('.fade');

    const observer = new IntersectionObserver(observerCallback, fade_observerOptions);

    fades.forEach((el) => observer.observe(el));

});

function observerCallback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("faded"); 
      }
      // Add the else if you want to fade out images out of the viewport
      else {
        entry.target.classList.remove("faded");
      }
    });
}