"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-1 text-2xl font-bold text-blue-800"
        >
          <span className="text-yellow-500">H</span>
          <span>oidap247</span>
          <span className="text-sm font-normal text-gray-500">.com</span>
        </Link>

        {/* Search */}
        <div className="flex flex-1 mx-2 md:mx-6">
          <input
            type="text"
            placeholder="Câu hỏi của bạn là gì?"
            className="flex-1 rounded-l-md px-4 py-2 bg-green-50 border border-green-200 text-sm outline-none focus:ring-2 focus:ring-green-200"
          />
          <button className="bg-yellow-400 text-white px-4 py-2 rounded-r-md font-semibold">
            Tìm
          </button>
        </div>

        {/* Desktop Auth */}
        <div className="hidden lg:flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-300">
          {/* Toggle dark mode */}
          <button
            id="darkModeToggle"
            className="text-gray-600 dark:text-yellow-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2v2m6.364 1.636l-1.414 1.414M22 12h-2M17.364 17.364l-1.414-1.414M12 20v2m-5.364-2.636l1.414-1.414M4 12H2m2.636-5.364l1.414 1.414"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          {/* Login/Register */}
          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 transition-transform duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A12.013 12.013 0 0112 15c2.21 0 4.264.597 6.005 1.637M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <Link href="/auth/login" className="hover:underline">
              Đăng nhập
            </Link>
          </span>
          <span>|</span>
          <Link href="/auth/login" className="hover:underline">
            Đăng ký
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-3 bg-white">
          <Link
            href="/login"
            className="block py-2 text-gray-700 hover:underline"
          >
            Đăng nhập
          </Link>
          <Link
            href="/register"
            className="block py-2 text-gray-700 hover:underline"
          >
            Đăng ký
          </Link>
        </div>
      )}
    </header>
  );
}
