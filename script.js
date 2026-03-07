function openProject(url) {
  window.open(url, "_blank");
}

// Simple animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    let position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
// كتابة تدريجية للنص
document.addEventListener("DOMContentLoaded", function() {
  const text = "Hello, I'm a Web Developer";
  const heading = document.querySelector(".hero h1");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      heading.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  heading.innerHTML = "";
  typeWriter();
});
function openProject(url) {
  // حركة قبل فتح الرابط
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.style.transform = "scale(0.95)";
      setTimeout(() => {
        window.open(url, "_blank");
        card.style.transform = "scale(1)";
      }, 300);
    });
  });
}
const icons = document.querySelectorAll(".social-icons .icon");

icons.forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "rotate(20deg) scale(1.2)";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "rotate(0deg) scale(1)";
  });
});
window.onload = () => {
  const banner = document.querySelector(".banner-img");
  banner.style.opacity = 0;
  setTimeout(() => {
    banner.style.transition = "opacity 2s";
    banner.style.opacity = 1;
  }, 500);
};

