"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex justify-center items-center min-h-screen px-4 bg-gray-100">
      <section className="bg-white p-8 rounded-xl shadow-md max-w-md w-full space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Tạo tài khoản mới
        </h1>

        {/* Register Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Họ và tên
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Tên đăng nhập
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
            >
              Đăng ký
            </button>
          </div>
        </form>

        {/* Link to login */}
        <p className="text-sm text-center text-gray-600">
          Đã có tài khoản?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Đăng nhập ngay
          </Link>
        </p>
      </section>
    </main>
  );
}
