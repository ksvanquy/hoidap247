"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "🏠 Trang chủ" },
  { href: "/mon-toan", label: "📐 Môn Toán" },
  { href: "/mon-van", label: "📖 Môn Văn" },
  { href: "/mon-anh", label: "🇬🇧 Môn Tiếng Anh" },
  { href: "/mon-ly", label: "💡 Môn Vật Lý" },
  { href: "/mon-hoa", label: "⚗️ Môn Hóa Học" },
  { href: "/mon-sinh", label: "🌿 Môn Sinh Học" },
  { href: "/mon-su", label: "🏛️ Môn Lịch Sử" },
  { href: "/mon-dia", label: "🌍 Môn Địa Lý" },
  { href: "/mon-gdcd", label: "🧭 Giáo Dục Công Dân" },
];

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-64 px-4 py-4 bg-white h-[calc(100vh-64px)] sticky top-16">
      <nav className="space-y-1 text-sm text-gray-700">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-2 rounded-md transition-all font-medium ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
