const toggleBtn = document.getElementById("mobile-menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
