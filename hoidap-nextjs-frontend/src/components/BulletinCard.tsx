"use client";

import { FC } from "react";

const BulletinCard: FC = () => {
  return (
    <div className="w-full rounded-lg bg-white p-4 text-sm shadow">
      <h3 className="text-center text-base font-semibold text-gray-800 mb-3">
        📋 Bảng tin
      </h3>
      <hr className="mb-3 border-t border-gray-300" />
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2 text-rose-500">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v10h10V5H5z" />
            </svg>
          </div>
          Discord Hoidap247
        </li>
        <li className="flex items-center gap-2 text-rose-500">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 00-8 8v8h8v-8H4V9.5A6 6 0 0110 4a6 6 0 016 5.5V10h-6v8h8v-8a8 8 0 00-8-8z" />
            </svg>
          </div>
          Đại sứ Văn Hóa Đọc
        </li>
        <li className="flex items-center gap-2 text-rose-500">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a1 1 0 00-1 1v12l5-3 5 3V4a1 1 0 00-1-1H5z" />
            </svg>
          </div>
          Gửi đề về Hoidap247
        </li>
      </ul>
    </div>
  );
};

export default BulletinCard;
