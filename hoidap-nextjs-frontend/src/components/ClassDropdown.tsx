"use client";

import { useState, useEffect, useRef } from "react";

const classOptions = [
  { value: "all", label: "Tất cả" },
  { value: "grade-1", label: "Lớp 1" },
  { value: "grade-2", label: "Lớp 2" },
  { value: "grade-3", label: "Lớp 3" },
  { value: "grade-4", label: "Lớp 4" },
];

export default function ClassDropdown() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(
    new Set(["all"])
  );
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const handleSelect = (value: string) => {
    const newSet = new Set(selectedItems);

    if (value === "all") {
      newSet.clear();
      newSet.add("all");
    } else {
      if (newSet.has("all")) newSet.delete("all");

      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }

      if (newSet.size === 0) {
        newSet.add("all");
      }
    }

    setSelectedItems(newSet);
  };

  const renderButtonText = () => {
    if (selectedItems.has("all")) return "Tất cả";
    const selectedLabels = classOptions
      .filter((opt) => selectedItems.has(opt.value))
      .map((opt) => opt.label);

    return selectedLabels.length === 1 ? selectedLabels[0] : "Nhiều lớp";
  };

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
        <span>{renderButtonText()}</span>
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
        <ul className="absolute z-10 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-md p-1 text-sm">
          {classOptions.map(({ value, label }) => (
            <li
              key={value}
              className={`cursor-pointer px-3 py-1 hover:bg-gray-100 flex justify-between ${
                selectedItems.has(value) ? "font-semibold text-purple-600" : ""
              }`}
              onClick={() => handleSelect(value)}
            >
              {label}
              {selectedItems.has(value) && <span>✔</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
