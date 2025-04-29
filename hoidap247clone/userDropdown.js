const menuButton = document.getElementById("user-menu-button");
const dropdown = document.getElementById("user-dropdown");

document.addEventListener("click", function (e) {
  // Toggle menu khi bấm vào nút
  if (menuButton.contains(e.target)) {
    dropdown.classList.toggle("hidden");
  } else {
    // Ẩn khi click ra ngoài
    dropdown.classList.add("hidden");
  }
});
