// === Script chọn lớp ===
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const selectedOption = document.getElementById("selectedOption");
const items = dropdownMenu.querySelectorAll("li");

let selectedItems = new Set();

dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    const text = item.textContent.replace("✔", "").trim();

    if (text === "Tất cả") {
      selectedItems.clear();
      selectedItems.add("Tất cả");
    } else {
      if (selectedItems.has("Tất cả")) selectedItems.delete("Tất cả");

      if (selectedItems.has(text)) {
        selectedItems.delete(text);
      } else {
        selectedItems.add(text);
      }

      if (selectedItems.size === 0) {
        selectedItems.add("Tất cả");
      }
    }

    updateUI();
  });
});

function updateUI() {
  items.forEach((item) => {
    const text = item.textContent.replace("✔", "").trim();
    const isSelected = selectedItems.has(text);

    item.classList.toggle("selected", isSelected);

    const icon = item.querySelector("span");
    if (icon) icon.remove();

    if (isSelected) {
      const check = document.createElement("span");
      check.textContent = "✔";
      check.className = "text-purple-600 font-bold";
      item.appendChild(check);
    }
  });

  if (selectedItems.has("Tất cả")) {
    selectedOption.textContent = "Tất cả";
  } else if (selectedItems.size === 1) {
    selectedOption.textContent = Array.from(selectedItems)[0];
  } else {
    selectedOption.textContent = "Nhiều lớp";
  }
}

document.addEventListener("click", (e) => {
  if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
  }
});

selectedItems.add("Tất cả");
updateUI();

// === Script chọn trạng thái câu hỏi ===
const statusBtn = document.getElementById("statusDropdownButton");
const statusMenu = document.getElementById("statusDropdownMenu");
const selectedStatus = document.getElementById("selectedStatus");

statusBtn.addEventListener("click", () => {
  statusMenu.classList.toggle("hidden");
});

statusMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    statusMenu.querySelectorAll("li").forEach((li) => {
      li.classList.remove("selected");
      const check = li.querySelector("span");
      if (check) check.remove();
    });

    item.classList.add("selected");
    const check = document.createElement("span");
    check.innerText = "✔";
    check.className = "text-purple-600 font-bold";
    item.appendChild(check);

    selectedStatus.innerText = item.innerText.replace("✔", "").trim();
    statusMenu.classList.add("hidden");
  });
});

document.addEventListener("click", function (e) {
  if (!statusBtn.contains(e.target) && !statusMenu.contains(e.target)) {
    statusMenu.classList.add("hidden");
  }
});
