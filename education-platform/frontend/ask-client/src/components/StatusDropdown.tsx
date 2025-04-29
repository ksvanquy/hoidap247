"use client";

import { useState, useEffect, useRef } from "react";

const statusOptions = [
  { value: "all", label: "Tất cả" },
  { value: "unanswered", label: "Chưa trả lời" },
  { value: "answered", label: "Đã trả lời" },
  { value: "first-time", label: "Lần đầu hỏi" },
];

export default function StatusDropdown() {
  const [selectedValue, setSelectedValue] = useState("all");
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const selectedLabel =
    statusOptions.find((option) => option.value === selectedValue)?.label || "";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleMenu}
        className="bg-white border border-gray-300 px-3 py-1 rounded-md text-sm flex items-center space-x-2"
      >
        <span>{selectedLabel}</span>
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {showMenu && (
        <ul className="absolute z-10 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-md p-1 text-sm">
          {statusOptions.map(({ value, label }) => (
            <li
              key={value}
              className={`cursor-pointer px-3 py-1 hover:bg-gray-100 flex justify-between ${
                selectedValue === value ? "font-semibold text-purple-600" : ""
              }`}
              onClick={() => {
                setSelectedValue(value);
                setShowMenu(false);
              }}
            >
              {label}
              {selectedValue === value && <span>✔</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
