// ======== AOS Activation =======
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

// ======== Swiper JS ========
new Swiper(".banner__slider", {
  spaceBetween: 1,
  speed: 600,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2200,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
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

// ======= Form Validation =======

const form = document.getElementById("contact__form");
const popupName = document.getElementById("popupName");
const popupEmail = document.getElementById("popupEmail");
const popupMessage = document.getElementById("popupMessage");
const modal = new bootstrap.Modal(document.getElementById("popUp"));

function showPopup(formData) {
  popupName.innerText = formData.name;
  popupEmail.innerText = formData.email;
  popupMessage.innerText = formData.message;
  modal.show();
}

function closePopup() {
  modal.hide();
  form.reset();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
    message: form.elements["message"].value,
  };
  showPopup(formData);
});

const popUp = document.getElementById("popUp");
popUp.addEventListener("hidden.bs.modal", closePopup);
