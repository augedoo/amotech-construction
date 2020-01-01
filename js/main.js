// Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("header").style.opacity = 0.9;
    document.querySelector("header").style.padding = "1rem 0rem";
    document.querySelector("header").style.backgroundColor = "#272727";
    document.querySelector(".to-top-btn").style.opacity = 1;
  } else {
    document.querySelector("header").style.opacity = 1;
    document.querySelector("header").style.padding = "2rem 0rem";
    document.querySelector("header").style.backgroundColor = "transparent";
    document.querySelector(".to-top-btn").style.opacity = 0;
  }
});

// Smooth Scrolling
$("#navbar a, .btn, .to-top-btn a, #showcase a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 50
      },
      800
    );
  }
});
