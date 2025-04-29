"use client";

import ClassDropdown from "./ClassDropdown";
import StatusDropdown from "./StatusDropdown";
import QuestionUserItem from "./QuestionUserItem";

export default function MainContent() {
  return (
    <section className="flex-1 p-6 bg-gray-50 space-y-4">
      {/* Dropdowns */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Chọn lớp */}
        <ClassDropdown />

        {/* Chọn trạng thái */}
        <StatusDropdown />
      </div>

      {/* Nút câu hỏi mới */}
      <div>
        <button className="w-full bg-green-500 text-white py-2 rounded-md font-semibold text-sm hover:bg-green-600 transition">
          +22 câu hỏi mới nhất
        </button>
      </div>

      {/* Danh sách câu hỏi */}
      <QuestionUserItem
        avatarUrl="/images/avatar.png"
        subject="Vật Lý"
        grade="L12"
        point={40}
        timeAgo="2 giờ trước"
        views={1}
        content="Câu hỏi của bạn là gì? Hãy viết nội dung ở đây."
        answerAvatars={["/images/userAnswer1.jpg", "/images/userAnswer2.jpg"]}
      />
    </section>
  );
}
