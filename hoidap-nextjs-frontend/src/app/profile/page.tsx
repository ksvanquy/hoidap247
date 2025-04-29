// app/profile/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("questions");

  return (
    <Layout>
      <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl shadow p-6">
        {/* Avatar + Name */}
        <div className="flex items-center space-x-6">
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={96}
            height={96}
            className="rounded-full border-4 border-blue-500"
          />
          <div>
            <h1 className="text-2xl font-bold">Tên người dùng</h1>
            <p className="text-gray-500">Thành viên từ: 01/01/2024</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-xl font-bold text-blue-600">120</p>
            <p className="text-gray-600">Câu hỏi</p>
          </div>
          <div>
            <p className="text-xl font-bold text-green-600">340</p>
            <p className="text-gray-600">Câu trả lời</p>
          </div>
          <div>
            <p className="text-xl font-bold text-yellow-600">850</p>
            <p className="text-gray-600">Điểm uy tín</p>
          </div>
          <div>
            <p className="text-xl font-bold text-purple-600">15</p>
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
                    ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                    : "hover:text-blue-600"
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
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border">
                <a
                  href="#"
                  className="text-lg font-semibold text-blue-700 hover:underline"
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
              <div className="bg-white p-4 rounded-lg shadow border">
                <div className="text-sm text-gray-500 mb-1">
                  Bạn đã trả lời câu hỏi:
                </div>
                <a
                  href="#"
                  className="text-base font-semibold text-blue-700 hover:underline"
                >
                  Giải bài toán: 2x + 3 = 7
                </a>
                <p className="text-gray-700 mt-2">Ta có: 2x + 3 = 7 ⟹ x = 2.</p>
                <div className="mt-2 text-sm text-gray-400">
                  Trả lời ngày: 05/04/2025
                </div>
              </div>
            </div>
          )}

          {activeTab === "badges" && (
            <p className="text-gray-500 italic">
              Bạn chưa nhận được huy hiệu nào.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
