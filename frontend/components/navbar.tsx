"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const NAV_LINKS = ["Compare", "Apps", "How It Works", "Savings", "Help"];

const sheetEaseIn = [0.22, 1, 0.36, 1] as const;
const sheetEaseOut = [0.55, 0, 1, 0.45] as const;

function PillButton({
  label,
  variant,
}: {
  label: string;
  variant: "accent" | "muted";
}) {
  const styles =
    variant === "accent"
      ? "bg-[#7342E2] text-white hover:shadow-[0_6px_20px_rgba(115,66,226,0.35)]"
      : "bg-[#F2F2EE] text-[#192837]";

  return (
    <button
      className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-shadow active:scale-95 ${styles}`}
    >
      {label}
    </button>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-40"
        style={{ background: "rgba(25,40,55,0.35)", backdropFilter: "blur(4px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />
      <motion.aside
        key="sheet"
        className="fixed top-0 right-0 z-50 flex flex-col"
        style={{
          width: "min(88vw, 360px)",
          height: "100dvh",
          background: "#CFC8C5",
          boxShadow: "-12px 0 48px rgba(25,40,55,0.18)",
        }}
        initial={{ x: "100%" }}
        animate={{ x: 0, transition: { duration: 0.45, ease: sheetEaseIn } }}
        exit={{ x: "100%", transition: { duration: 0.35, ease: sheetEaseOut } }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Logo />
          <motion.button
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ background: "rgba(25,40,55,0.1)" }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </motion.button>
        </div>

        <div
          className="h-px"
          style={{ background: "rgba(25,40,55,0.12)", margin: "0 24px" }}
        />

        <nav className="flex flex-col gap-1 px-3 py-6">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link}
              href="#"
              className="rounded-xl px-3 py-3 hover:bg-black/10"
              style={{ fontSize: "1.1rem" }}
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.18 + i * 0.07,
                duration: 0.4,
                ease: sheetEaseIn,
              }}
              onClick={onClose}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 px-6 pb-8">
          <button className="w-full rounded-full bg-[#7342E2] py-3.5 text-white" style={{ fontSize: "0.95rem" }}>
            Start For Free
          </button>
          <button className="w-full rounded-full bg-[#F2F2EE] py-3.5 text-[#192837]" style={{ fontSize: "0.95rem" }}>
            Sign In
          </button>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="relative z-10 mx-auto flex items-center justify-between max-w-[1280px]"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <div className="flex w-full items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
          <a href="#" aria-label="QuickCompare home">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-[#192837] transition-opacity hover:opacity-70"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <PillButton label="Start For Free" variant="accent" />
            <PillButton label="Sign In" variant="muted" />
          </div>

          <button
            className="md:hidden text-[#192837]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
