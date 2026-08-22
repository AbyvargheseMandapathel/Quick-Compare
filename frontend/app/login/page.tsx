"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ArrowRightCircle, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F7F6F3] px-5 py-10">
      <Link href="/" aria-label="QuickCompare home">
        <svg
          width="40"
          height="40"
          viewBox="0 0 256 256"
          fill="#192837"
          role="img"
          aria-label="QuickCompare logo"
        >
          <path d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z" />
        </svg>
      </Link>

      <div className="mt-8 w-full max-w-md rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(25,40,55,0.08)] sm:p-10">
        <h1
          className="text-center text-3xl leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "#192837" }}
        >
          Welcome back
        </h1>
        <p className="mt-2 text-center text-sm text-[#454745]">
          Sign in to keep saving on every order.
        </p>

        <form className="mt-8 flex flex-col gap-5" action="#" method="post">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-[#192837]">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="rounded-full border border-black/10 bg-[#F2F2EE] px-5 py-3 text-sm outline-none transition-shadow placeholder:text-[#454745]/50 focus:border-[#7342E2] focus:shadow-[0_0_0_3px_rgba(115,66,226,0.15)]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-[#192837]"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm font-medium text-[#7342E2] hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-full border border-black/10 bg-[#F2F2EE] px-5 py-3 pr-12 text-sm outline-none transition-shadow placeholder:text-[#454745]/50 focus:border-[#7342E2] focus:shadow-[0_0_0_3px_rgba(115,66,226,0.15)]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#454745] hover:text-[#192837]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 flex items-center justify-between gap-8 rounded-full bg-[#7342E2] px-6 py-4 text-white shadow-[0_4px_24px_rgba(115,66,226,0.28)] transition-transform hover:scale-[1.02] active:scale-95"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
          >
            Sign In
            <ArrowRightCircle size={20} />
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <span className="h-px flex-1 bg-black/10" />
          <span className="text-xs font-medium uppercase tracking-wide text-[#454745]/70">
            or
          </span>
          <span className="h-px flex-1 bg-black/10" />
        </div>

        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full rounded-full border border-black/10 bg-[#F2F2EE] py-3.5 text-sm font-semibold text-[#192837] transition-colors hover:bg-[#eae9e3]"
        >
          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-[#454745]">
          New to QuickCompare?{" "}
          <Link href="/" className="font-semibold text-[#7342E2] hover:underline">
            Start for free
          </Link>
        </p>
      </div>

      <p className="mt-8 max-w-sm text-center text-xs leading-relaxed text-[#454745]/70">
        We never store your delivery app credentials. Comparisons run on public
        prices only.
      </p>
    </main>
  );
}
