(() => {
  const toggle = document.querySelector(".navbar-toggler");
  const menu = document.querySelector("#navbarNav");

  if (!toggle || !menu) return;

  const setMenuOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("show", open);
  };

  toggle.addEventListener("click", () => {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a") && !event.target.closest(".disabled")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) setMenuOpen(false);
  });
})();
