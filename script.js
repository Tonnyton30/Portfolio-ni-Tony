const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Buksan ang navigation menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Isara ang navigation menu" : "Buksan ang navigation menu"
  );
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const typewriterParagraph = document.querySelector(".typewriter-p");

if (typewriterParagraph) {
  const paragraphText = typewriterParagraph.textContent.trim();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typewriterParagraph.textContent = paragraphText;
  } else {
    typewriterParagraph.style.minHeight = `${typewriterParagraph.offsetHeight}px`;
    typewriterParagraph.textContent = "";

    window.setTimeout(() => {
      let characterIndex = 0;
      const typingInterval = window.setInterval(() => {
        typewriterParagraph.textContent += paragraphText[characterIndex];
        characterIndex += 1;

        if (characterIndex >= paragraphText.length) {
          window.clearInterval(typingInterval);
        }
      }, 25);
    }, 4500);
  }
}
