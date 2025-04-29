"use client";

import { useState, useRef, useEffect } from "react";

const statusOptions = [
  { value: "all", label: "Tất cả" },
  { value: "pending", label: "Chờ trả lời" },
  { value: "answered", label: "Đã trả lời" },
  { value: "closed", label: "Đã đóng" },
];

export default function StatusDropdown() {
  const [selectedValue, setSelectedValue] = useState("all");
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel = statusOptions.find((opt) => opt.value === selectedValue)?.label || "Tất cả";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleMenu}
        className="bg-background border border-border px-3 py-1 rounded-md text-sm flex items-center space-x-2 text-muted hover:border-primary hover:text-primary transition-colors"
      >
        <span>{selectedLabel}</span>
        <svg
          className="w-4 h-4"
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
        <ul className="absolute z-10 mt-1 w-40 bg-background border border-border rounded-md shadow-md p-1 text-sm">
          {statusOptions.map(({ value, label }) => (
            <li
              key={value}
              className={`cursor-pointer px-3 py-1 hover:bg-primary/5 flex justify-between ${
                selectedValue === value ? "font-semibold text-primary" : "text-muted hover:text-primary"
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
