(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 70
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  $(window).scroll(function() {
    if (!$("#btn-1").hasClass("collapsed")) {
      $("#btn-1").click();
    }
    if ($(window).scrollTop() >= 105) {
      $("#mainNav").addClass("o-hide");
      $("#mainNav2").show();
      $("#mainNav2").addClass("o-show");

      $("#btn-t1").css("visibility", "hidden");
      $("#mainNav2").addClass("fixed-header");
    } else {
      $("#mainNav2").removeClass("o-show");
      $("#mainNav2").removeClass("fixed-header");

      $("#mainNav2").hide();
      $("#mainNav").addClass("o-hide");
      $("#btn-t1").css("visibility", "visible");
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // // Activate scrollspy to add active class to navbar items on scroll
  // $("body").scrollspy({
  //   target: "#mainNav",
  //   offset: 80
  // });
  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav2",
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav2").offset().top > 120) {
      $("#mainNav2").addClass("navbar-shrink");
    } else {
      $("#mainNav2").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $(".portfolio-item").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#username",
    modal: true
  });
  $(document).on("click", ".portfolio-modal-dismiss", function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // Floating label headings for the contact form
  $(function() {
    $("#cube1").mouseout(function() {
      $("#Space2").height(80);
      $("#cube2").removeClass("o-hide");
    });
    $("#cube1").mouseover(function(e) {
      $("#Space2").height(180);
      $("#cube2").addClass("o-hide");
    });

    $("#cube2").mouseout(function() {
      $("#Space2").height(80);
      $("#cube1").removeClass("o-hide");
    });
    $("#cube2").mouseover(function(e) {
      $("#Space2").height(180);
      $("#cube1").addClass("o-hide");
    });

    function animateProgressBar(el, width) {
      el.animate(
        { width: width },
        {
          duration: 2000,
          step: function(now, fx) {
            if (fx.prop == "width") {
              // el.html(el.data("name") + ": " + Math.round(now * 100) / 100 + '%');
              el.html("  " + Math.round(now * 100) / 100 + "%");
            }
          }
        }
      );
    }

    function animateEmptyProgressBar(el, width) {
      el.animate(
        { width: width },
        {
          duration: 200,
          step: function(now, fx) {
            if (fx.prop == "width") {
              // el.html(el.data("name") + ": " + Math.round(now * 100) / 100 + '%');
              el.html("  " + Math.round(now * 100) / 100 + "%");
            }
          }
        }
      );
    }

    $(".progress").each(function() {
      animateProgressBar($(this).find("div"), $(this).data("width"));
    });

    function CallProgressBar() {
      $(".progress").each(function() {
        animateProgressBar($(this).find("div"), $(this).data("width"));
      });
    }

    function EmptyProgressBar() {
      $(".progress").each(function() {
        animateEmptyProgressBar($(this).find("div"), 0);
      });
    }

    $("body")
      .on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass(
          "floating-label-form-group-with-value",
          !!$(e.target).val()
        );
      })
      .on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      })
      .on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });

    ScrollReveal().reveal(".headline");
    window.sr = new ScrollReveal({
      reset: true,
      mobile: false
    });

    sr.reveal(".mySkills", {
      viewFactor: 0.4,
      duration: 2000,
      beforeReveal: EmptyProgressBar,
      afterReveal: CallProgressBar,
      afterReset: EmptyProgressBar
    });
  });
})(jQuery); // End of use strict
