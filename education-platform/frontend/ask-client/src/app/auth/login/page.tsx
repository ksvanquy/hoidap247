"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-1">
          Chào mừng trở lại
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Vui lòng nhập thông tin để đăng nhập.
        </p>

        {/* Login form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Nhập email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black" />
              <span className="ml-2 text-gray-600">Ghi nhớ đăng nhập</span>
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-gray-600 hover:underline"
            >
              Quên mật khẩu?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md font-semibold"
          >
            Đăng nhập
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Bạn chưa có tài khoản?{" "}
          <Link
            href="/auth/register"
            className="text-black font-medium hover:underline"
          >
            Đăng ký
          </Link>
        </p>
      </div>
    </section>
  );
}
