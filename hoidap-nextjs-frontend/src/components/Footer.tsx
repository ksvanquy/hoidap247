"use client";

import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#4a7b8d] text-white text-sm mt-8">
      <div className="bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cột 1: Logo và thông tin */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-yellow-300">H</span>oidap247
              <span className="text-sm">.com</span>
            </h2>
            <p className="mb-4">
              Cơ quan chủ quản: Công ty Cổ phần Công nghệ Giáo dục Thành Phát
            </p>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                width={24}
                height={24}
                alt="Facebook"
              />
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                width={24}
                height={24}
                alt="YouTube"
              />
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
                width={24}
                height={24}
                alt="Discord"
              />
            </div>
            <p className="mb-1">Tải ứng dụng</p>
            <div className="flex gap-2">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width={135}
                height={40}
              />
              <Image
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                width={120}
                height={40}
              />
            </div>
          </div>

          {/* Cột 2: Liên kết */}
          <div>
            <ul className="space-y-1">
              <li>○ Hướng dẫn sử dụng</li>
              <li>○ Điều khoản sử dụng</li>
              <li>○ Nội quy hoidap247</li>
              <li>○ Góp ý</li>
              <li className="flex items-center">
                ○ Sự kiện nóng
                <span className="bg-red-600 text-xs text-white px-1 ml-2 rounded">
                  NEW
                </span>
              </li>
              <li className="flex items-center">
                ○ Kết quả đua top
                <span className="bg-red-600 text-xs text-white px-1 ml-2 rounded">
                  NEW
                </span>
              </li>
              <li className="flex items-center">
                ○ Thông báo
                <span className="bg-red-600 text-xs text-white px-1 ml-2 rounded">
                  NEW
                </span>
              </li>
            </ul>
          </div>

          {/* Cột 3: Liên hệ */}
          <div>
            <p className="mb-2">
              📧 <span className="underline">Inbox: m.me/hoidap247online</span>
            </p>
            <p>
              📍 Trụ sở: Tầng 7, Tòa Intracom, số 82 Dịch Vọng Hậu, Cầu Giấy, Hà
              Nội.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-xs bg-[#467589] py-3">
        Giấy phép thiết lập mạng xã hội trên mạng số 331/GP-BTTTT do Bộ Thông
        tin và Truyền thông cấp.
      </div>
    </footer>
  );
};

export default Footer;
