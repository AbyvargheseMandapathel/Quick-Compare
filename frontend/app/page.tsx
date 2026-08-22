import { Hero } from "@/components/hero";
import {
  AppsStrip,
  HowItWorks,
  Features,
  CallToAction,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex-1 bg-white">
        <AppsStrip />
        <HowItWorks />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
