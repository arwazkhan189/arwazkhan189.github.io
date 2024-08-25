//navbar animation
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $(".navbar").addClass("navbar-scroll");
    } else {
      $(".navbar").removeClass("navbar-scroll");
    }
  });
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500,
    "easeInOutExpo"
  );
  return false;
});

//typejs animation
/*
"Python Developer " +
    "<img src='./assets/images/skills_image/python.svg' width='30px'>",
*/
var typed = new Typed(".typejs", {
  strings: [
    "MTech CSE'26 | NIT Delhi " +
    "<img src='./assets/images/NITD_logo.svg' width='30px'>",
    "Android App Developer " +
    "<img src='./assets/images/skills_image/android-developer.svg' width='30px'>",
    "Full Stack Developer " +
    "<img src='./assets/images/skills_image/web-developer.svg' width='30px'>"
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  smartBackspace: true,
  backDelay: 1200,
  startDelay: 1000,
});

//certificate light box animation
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
  disableScrolling: true,
});

//nav bar
// Navigation active state on scroll
var nav_sections = $("section");
var main_nav = $(".navbar-nav");

$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop() + 200;

  nav_sections.each(function () {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        main_nav.find("li").removeClass("active");
      }
      main_nav
        .find('a[href="#' + $(this).attr("id") + '"]')
        .parent("li")
        .addClass("active");
    }
    if (cur_pos < 300) {
      $(".nav-menu ul:first li:first").addClass("active");
    }
  });
});

/*flickity carousel - skill section*/
$(".main-carousel-skill").flickity({
  cellAlign: "left",
  contain: true,
  pageDots: false,
  wrapAround: true,
  autoPlay: 800,
  freeScroll: true,
});

/*flickity carousel - project section*/
$(".main-carousel-project").flickity({
  cellAlign: "left",
  contain: true,
  pageDots: false,
  wrapAround: true,
  autoPlay: 2000,
  freeScroll: true,
});

/*Profile Views
function portfolioViews(response) {
  document.querySelector("#views").textContent = response.value;
}*/

//Navbar Close code
$(document).ready(function () {
  $(".navbar-nav a").on("click", function () {
    if ($(".navbar-toggler").is(":visible")) {
      $(".navbar-toggler").click();
    }
  });
});
