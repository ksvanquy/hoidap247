document.querySelectorAll(".tab-link").forEach((tab) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();

    // Xóa lớp active khỏi tất cả tab
    document.querySelectorAll(".tab-link").forEach((t) => {
      t.classList.remove(
        "border-b-2",
        "border-blue-600",
        "font-semibold",
        "text-blue-600"
      );
    });

    // Thêm lớp active vào tab được chọn
    this.classList.add(
      "border-b-2",
      "border-blue-600",
      "font-semibold",
      "text-blue-600"
    );

    // Ẩn tất cả nội dung
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.add("hidden"));

    // Hiện nội dung tương ứng
    const tabId = this.getAttribute("data-tab");
    document.getElementById("tab-" + tabId).classList.remove("hidden");
  });
});
