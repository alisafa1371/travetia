////////////////////// Navbar ////////////////////////////////////////////
// toggling 'scroll' class by scrolling the viewport
var myNav = document.getElementById("nav");
window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 280 ||
    document.documentElement.scrollTop >= 280
  ) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

// toggling 'scroll-darker' class by clicking the menu
const toggle = document.querySelector(".navbar-toggler");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  nav.classList.toggle("scroll-darker");
});
///////////////////////// Gallery //////////////////////////////////
// making video stop when close the modal
$(document).ready(function () {
  var $videoSrc;
  $(".video-modal").click(function () {
    $videoSrc = $(this).data("src");
  });
  $("#exampleModal1,#exampleModal2,#exampleModal3").on(
    "shown.bs.modal",
    function (e) {
      $("#video1,#video2,#video3").attr("src", $videoSrc);
    }
  );
  $("#exampleModal1,#exampleModal2,#exampleModal3").on(
    "hide.bs.modal",
    function (e) {
      $("#video1,#video2,#video3").attr("src", $videoSrc);
    }
  );
});

///////////////////////// Modals //////////////////////////////////
// contact Modal
$(".whatsapp").on("click", function () {
  $(".modal-body").html("شماره واتس اپ 09365788502");
  $(".modal-title").html("Whatsapp");
});
$(".cta-btn").on("click", function () {
  $(".modal-body").html("شماره تماس 09365788502");
  $(".modal-title").html("تلفن");
});

$(".nav-item").on("click", function () {
  $(".navbar-collapse").removeClass("show");
});

// picture modal

$(".myImg").on("click", function () {
  $("#picModal").css({
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "flex-direction": "column",
  });

  $("#img01").attr("src", $(this).attr("src"));

  $("#caption").html($(this).attr("alt"));
});

// When the user clicks on <span> (x), close the modal
$(".picModal-close").on("click", function () {
  $("#picModal").css("display", "none");
});

////////////////////////// Reveal by Scrolling ////////////////////////////////////

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
////////////////////////// Changing carousel video in mobile viewport////////////////////////////////////
function mediaSize() {
  var videoFile = "img/Stripes-480.mp4";

  if (window.matchMedia("(max-width:680px)").matches) {
    $(".carousel-item--2 video source").attr("src", videoFile);
    $(".carousel-item--2 video")[0].load();
  }
}
mediaSize();
