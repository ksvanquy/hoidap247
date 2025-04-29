"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfileContent() {
  const [activeTab, setActiveTab] = useState("questions");

  return (
    <section className="flex-1 p-0 bg-gray-50 space-y-4">
      <div className="max-w-5xl mx-auto rounded-2xl shadow p-6">
        {/* Avatar + Name */}
        <div className="flex items-center space-x-6">
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={96}
            height={96}
            className="rounded-full border-4 border-indigo-500"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tên người dùng</h1>
            <p className="text-gray-500">Thành viên từ: 01/01/2024</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-xl font-bold text-indigo-600">120</p>
            <p className="text-gray-600">Câu hỏi</p>
          </div>
          <div>
            <p className="text-xl font-bold text-indigo-600">340</p>
            <p className="text-gray-600">Câu trả lời</p>
          </div>
          <div>
            <p className="text-xl font-bold text-indigo-600">850</p>
            <p className="text-gray-600">Điểm uy tín</p>
          </div>
          <div>
            <p className="text-xl font-bold text-indigo-600">15</p>
            <p className="text-gray-600">Huy hiệu</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-gray-200">
          <nav className="flex space-x-6 text-gray-600">
            {["questions", "answers", "badges"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "border-b-2 border-indigo-600 font-semibold text-indigo-600"
                    : "hover:text-indigo-600"
                }`}
              >
                {tab === "questions"
                  ? "Câu hỏi"
                  : tab === "answers"
                  ? "Câu trả lời"
                  : "Huy hiệu"}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "questions" && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300">
                <a
                  href="#"
                  className="text-lg font-semibold text-indigo-700 hover:text-indigo-600"
                >
                  Giải phương trình: x² - 5x + 6 = 0
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Môn: Toán lớp 9 | Đã nhận 3 câu trả lời
                </p>
              </div>
            </div>
          )}

          {activeTab === "answers" && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300">
                <div className="text-sm text-gray-500 mb-1">
                  Bạn đã trả lời câu hỏi:
                </div>
                <a
                  href="#"
                  className="text-base font-semibold text-indigo-700 hover:text-indigo-600"
                >
                  Giải bài toán: 2x + 3 = 7
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Môn: Toán lớp 8 | Đã được chấp nhận
                </p>
              </div>
            </div>
          )}

          {activeTab === "badges" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="mt-2 font-medium">Huy hiệu vàng</p>
                <p className="text-xs text-gray-500">Đạt 100 điểm</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <p className="mt-2 font-medium">Huy hiệu sao</p>
                <p className="text-xs text-gray-500">Trả lời 50 câu</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 