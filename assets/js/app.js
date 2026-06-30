$(window).on("load", function () {
  var swiper;
  if ($(".featherlight-link").length) {
    $(".featherlight-link").on("click", function () {
      $(this).featherlight({
        targetAttr: "href",
        afterOpen: function () {
          swiper = new Swiper(this.$content.find(".swiper-container")[0], {
            loop: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            }
          });
        },
        afterClose: function () {
          if (swiper) {
            swiper.destroy();
          }
        }
      });
    });
  }
});

$(window).scroll(function () {
  var currentPoint = $(this).scrollTop();
  var activeEl = null;
  var currentActiveEl = $(".header .nav-link.active");

  $(".header .nav-link").each(function () {
    var target = $($(this).attr("href"));
    var top = target.length ? target.offset().top : 0;
    if (currentPoint >= top) {
      activeEl = $(this);
    }
  });

  if (activeEl && currentActiveEl.text() !== activeEl.text()) {
    $(".header .nav-link").removeClass("active");
    activeEl.addClass("active");
  }
});

$(function () {
  $(".header a").on("click", function () {
    var target = $($(this).attr("href"));
    var top = target.length ? target.offset().top : 0;
    $("html, body").stop().animate({
      scrollTop: top
    }, 1000);
  });
});

var fadeObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
};

document.addEventListener("DOMContentLoaded", function () {
  var fades = document.querySelectorAll(".fade");
  var observer = new IntersectionObserver(observerCallback, fadeObserverOptions);
  fades.forEach(function (el) {
    observer.observe(el);
  });
});

function observerCallback(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("faded");
    } else {
      entry.target.classList.remove("faded");
    }
  });
}
