"use client";

import { motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowRightCircle,
  Zap,
  LockKeyhole,
  Fingerprint,
} from "lucide-react";
import { Navbar } from "./navbar";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_131516_eca35265-ea66-4fbd-8d52-22aae6e1a503.mp4";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const inlineIcon = {
  color: "#192837",
  display: "inline",
  verticalAlign: "middle",
  position: "relative" as const,
  top: "-2px",
  margin: "0 4px",
};

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <Navbar />

      <div className="relative z-10" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="flex justify-center px-5 sm:px-8"
          style={{
            paddingTop: "clamp(40px, 8vw, 72px)",
            paddingBottom: "48px",
          }}
        >
          <motion.div
            className="flex flex-col items-center max-w-[660px]"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="visible"
              className="text-center"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.65rem, 5vw, 3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: "var(--color-text)",
              }}
            >
              <span className="whitespace-nowrap">
                Compare <Zap size={24} style={inlineIcon} /> Every{" "}
                <LockKeyhole size={24} style={inlineIcon} /> Quick Delivery
              </span>
              <br />
              App Price
              <Fingerprint size={24} style={{ ...inlineIcon, marginLeft: 6 }} />
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="visible"
              className="text-center"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                color: "var(--color-text)",
                opacity: 0.8,
                maxWidth: "560px",
                lineHeight: 1.65,
                marginTop: "24px",
              }}
            >
              Zero stress, total savings. Live prices from Blinkit, Zepto,
              Instamart and BigBasket — one search shows the cheapest basket,
              every time.
            </motion.p>

            <motion.button
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => router.push("/login")}
              className="mt-10 flex items-center text-white bg-[#7342E2]"
              style={{
                borderRadius: "50px",
                padding: "17px 24px",
                minWidth: "210px",
                justifyContent: "space-between",
                gap: "32px",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                boxShadow: "0 4px 24px rgba(115,66,226,0.28)",
              }}
            >
              Compare For Free
              <ArrowRightCircle size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
