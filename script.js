function openProject(url) {
  window.open(url, "_blank");
}

// Animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    let position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100)

