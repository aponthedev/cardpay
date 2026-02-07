(function ($) {
  "use strict";

  //============================ Scroll To Top Js Start ========================
  var btn = $(".scroll-top");

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "300",
    );
  });
  //============================ Scroll To Top Js End ========================

  // otp input ==========================
  const $inputs = $(".otp-input");

  $inputs.on("input", function () {
    let $this = $(this);
    $this.val($this.val().replace(/\D/g, ""));
    if ($this.val().length === 1) {
      let index = $inputs.index(this);
      let next = $inputs.eq(index + 1);
      if (next.length) next.focus();
    }
  });
  $inputs.on("keydown", function (e) {
    let index = $inputs.index(this);
    if (index === 0) return;

    if (e.key === "Backspace" && $(this).val() === "") {
      let prev = $inputs.eq(index - 1);
      if (prev.length) prev.focus();
    }
  });
  $inputs.on("paste", function (e) {
    e.preventDefault();
    let pasteData = (e.originalEvent || e).clipboardData
      .getData("text")
      .replace(/\D/g, "");

    pasteData.split("").forEach((num, i) => {
      if (i < $inputs.length) {
        $inputs.eq(i).val(num);
      }
    });

    // Boundary check for focus
    let lastIndex = pasteData.length - 1;
    if (lastIndex < $inputs.length && lastIndex >= 0) {
      $inputs.eq(lastIndex).focus();
    }
  });
  // otp input ==========================

  //============== image uplode==============

  //============== image uplode==============

  // ========================== js gsap ========================== /
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll(".banner__content > *");

    gsap.from(items, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".banner__content",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".banner__thumb img", {
      y: 50,
      opacity: 0,
      scale: 0.5,
      duration: 1.9,
      delay: 0.3,
      ease: "power5.out",
    });
  });

  // ========================== js gsap ========================== /

  //====================== testimonial card js ======================//
  $(document).on("click", ".testimonial__card__top-button", function () {
    const $card = $(this).closest(".testimonial__card__content");
    const $showcase = $card.find(".testimonial__card__showcase");

    if ($showcase.hasClass("d-none")) {
      $showcase.removeClass("d-none").hide().slideDown(400);
    } else {
      $showcase.slideUp(400, function () {
        $(this).addClass("d-none");
      });
    }
    $(this).find(".toggle-icon").toggleClass("is-open");
  });
  //====================== testimonial card js====================== //

  // ================card slider================
  var swiper = new Swiper(".mycardSwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // ✅ Responsive Breakpoints
    breakpoints: {
      // Mobile (0px - 575px)
      0: {
        slidesPerView: 1,
      },

      // Tablet (768px+)
      768: {
        slidesPerView: 2,
      },

      // Large Screen (1200px+)
      1399: {
        slidesPerView: 1,
      },
    },
  });

  // ================card slider ends ================

  // ========================= Header Sticky Js Start ==============
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 300) {
      $(".header__area").addClass("fixed-header");
    } else {
      $(".header__area").removeClass("fixed-header");
    }
  });
  // ========================= Header Sticky Js End===================

  //============================ Offcanvas Js Start ============================
  $(document).on("click", ".menu__open", function () {
    $(".offcanvas__area, .overlay").addClass("active");
  });

  $(document).on("click", ".menu__close, .overlay", function () {
    $(".offcanvas__area, .overlay").removeClass("active");
  });

  //============================ Offcanvas Js End ==============================

  // ===============================brand start==================================== //
  var brandSwiper = new Swiper(".brand-slider", {
    loop: true,
    allowTouchMove: false,
    spaceBetween: 10,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 5,
      },
    },
  });

  //=============================== brand ends==================================== //

  // ========================== Add Attribute For Bg Image Js Start =====================
  $(".bg--img").css("background-image", function () {
    var bg = "url(" + $(this).data("background-image") + ")";
    return bg;
  });
  // ========================== Add Attribute For Bg Image Js End =====================

  //============================ Sidebar Js Start ============================
  $(document).on("click", ".sidebar__open", function () {
    $(".dashboard__sidebar, .overlay").addClass("active");
  });

  $(document).on("click", ".sidebar__close, .overlay", function () {
    $(".dashboard__sidebar, .overlay").removeClass("active");
  });

  //============================ Sidebar Js End ==============================

  // ========================= Odometer Js Start ===================
  if ($(".odometer").length > 0) {
    $(window).on("scroll", function () {
      $(".odometer").each(function () {
        if ($(this).isInViewport()) {
          if (!$(this).data("odometer-started")) {
            $(this).data("odometer-started", true);
            this.innerHTML = $(this).data("odometer-final");
          }
        }
      });
    });
  }
  // isInViewport helper function
  $.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  // ========================= Odometer Js End ===================

  // ========================= Magnific Popup Js Start ===================
  $(".promo__video__play").magnificPopup({
    type: "iframe",
  });
  // ========================= Magnific Popup Js End ===================

  // ========================= Testimonial Swiper Js Start =====================
  var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    freeMode: true,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },

      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1399: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  // ========================= Testimonial Swiper Js End =====================

  // ========================= Select2 Js Start =====================
  if ($(".select2").length) {
    $(".select2").select2();
  }
  // ========================= Select2 Js End =====================

  // ========================= Show Hide Password Js Start ===================
  if ($(".password-show-hide").length) {
    $(".password-show-hide").each(function () {
      $(this).on("click", function () {
        let inputField = $(this).closest(".password__field").find("input");
        let openEye = $(this).find(".open-eye-icon");
        let closeEye = $(this).find(".close-eye-icon");

        if (inputField.attr("type") === "password") {
          inputField.attr("type", "text");
          openEye.show();
          closeEye.hide();
        } else {
          inputField.attr("type", "password");
          openEye.hide();
          closeEye.show();
        }
      });
    });
  }
  // ========================= Show Hide Password Js End ===================

  //============================ Filter Js Start ============================
  $(document).on("click", ".filter__btn", function () {
    $(".filter__main, .overlay").addClass("active");
  });

  $(document).on("click", ".filter__close, .overlay", function () {
    $(".filter__main, .overlay").removeClass("active");
  });

  //============================ Filter Js End ==============================

  // ========================= Scroll Reveal Js Start ===================
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 100,
    reset: true,
  });

  sr.reveal(".class__name", {
    delay: 60,
    interval: 100,
    origin: "bottom",
  });
  // ========================= Scroll Reveal Js End ===================

  // ========================== Table Data Label Js Start =====================
  Array.from(document.querySelectorAll("table")).forEach((table) => {
    let heading = table.querySelectorAll("thead tr th");
    Array.from(table.querySelectorAll("tbody tr")).forEach((row) => {
      let columArray = Array.from(row.querySelectorAll("td"));
      if (columArray.length <= 1) return;
      columArray.forEach((colum, i) => {
        colum.setAttribute("data-label", heading[i].innerText);
      });
    });
  });
  // ========================== Table Data Label Js End =====================

  // ========================== Label Required Js Start =====================
  $.each($("input, select, textarea"), function (i, element) {
    if (element.hasAttribute("required")) {
      $(element)
        .closest(".form-group")
        .find("label")
        .first()
        .addClass("required");
    }
  });
  // ========================== Label Required Js End =====================

  // ========================= Preloader Js Start =====================
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  });
  // ========================= Preloader Js End=====================
})(jQuery);
