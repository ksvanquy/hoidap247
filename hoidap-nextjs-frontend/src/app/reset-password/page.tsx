"use client";

import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <main className="flex justify-center items-center min-h-screen px-4">
      <section className="bg-white p-8 rounded-xl shadow-md max-w-md w-full space-y-6">
        {/* Tiêu đề */}
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Đặt lại mật khẩu
        </h1>

        {/* Form đặt lại mật khẩu */}
        <form className="space-y-4">
          {/* Mật khẩu mới */}
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu mới
            </label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              required
              placeholder="Nhập mật khẩu mới"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          {/* Xác nhận mật khẩu */}
          <div>
            <label
              htmlFor="confirm-new-password"
              className="block text-sm font-medium text-gray-700"
            >
              Xác nhận mật khẩu mới
            </label>
            <input
              type="password"
              id="confirm-new-password"
              name="confirm-new-password"
              required
              placeholder="Nhập lại mật khẩu"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          {/* Nút cập nhật */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
            >
              Cập nhật mật khẩu
            </button>
          </div>
        </form>

        {/* Quay lại đăng nhập */}
        <p className="text-sm text-center text-gray-600">
          Nhớ lại mật khẩu?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Đăng nhập
          </Link>
        </p>
      </section>
    </main>
  );
}
