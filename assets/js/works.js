// ======== AOS Activation =======
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

//======= Glightbox =======

const glightbox = GLightbox({
  selector: ".glightbox",
});

// ======== Back to Top =========
const backToTopBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("buttonVisible");
  } else {
    backToTopBtn.classList.remove("buttonVisible");
  }
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

