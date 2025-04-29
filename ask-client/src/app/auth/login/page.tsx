'use client';

import React from 'react';

export default function LoginPage() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      {/* Form đăng nhập */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-center text-sm text-gray-600 mt-2">
          Please sign in to your account
        </p>
        <form className="mt-6 space-y-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
            <a href="#" className="text-indigo-600 hover:underline">
              Sign Up
            </a>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}