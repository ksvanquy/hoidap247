"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="flex justify-center items-center min-h-screen px-4">
      <section className="bg-white p-8 rounded-xl shadow-md max-w-md w-full space-y-6">
        {/* Tiêu đề */}
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Quên mật khẩu?
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Nhập email của bạn và chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu.
        </p>

        {/* Biểu mẫu lấy lại mật khẩu */}
        <form className="space-y-4">
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
              placeholder="Nhập địa chỉ email..."
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
            >
              Gửi liên kết đặt lại mật khẩu
            </button>
          </div>
        </form>

        {/* Link quay lại đăng nhập */}
        <p className="text-sm text-center text-gray-600">
          Nhớ mật khẩu rồi?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Quay lại đăng nhập
          </Link>
        </p>
      </section>
    </main>
  );
}
