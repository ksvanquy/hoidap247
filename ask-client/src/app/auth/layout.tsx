// src/app/auth/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoidap247 - Auth",
  description: "Trang đăng nhập & đăng ký người dùng",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 md:px-12">
      {children}
    </main>
  );
}
