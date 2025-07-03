document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav .navigation li a");
  const navDots = document.querySelectorAll(".nav .navigation .dots");
  const current = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link, i) => {
    if (link.getAttribute("href") === current) {
      navDots[i].classList.add("active");
    } else {
      navDots[i].classList.remove("active");
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
  this.reset();
});
