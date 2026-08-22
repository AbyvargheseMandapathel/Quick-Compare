const DELIVERY_APPS = [
  "Swiggy Instamart",
  "Blinkit",
  "Zepto",
  "BigBasket",
  "QuickCompare",
];

const STEPS = [
  {
    title: "Search your product",
    description:
      "Type what you need — doodh, medicines, midnight maggi. One search, no app switching.",
  },
  {
    title: "We compare instantly",
    description:
      "QuickCompare checks prices across every quick delivery app available in your area.",
  },
  {
    title: "Order at the best price",
    description:
      "See total cost including fees and delivery. Tap through and checkout on the cheapest app.",
  },
];

const FEATURES = [
  {
    title: "Real totals, not tricks",
    description:
      "Delivery fees, handling charges and markups included. The price you see is the price you pay.",
  },
  {
    title: "Live price tracking",
    description:
      "Prices refresh as apps update them. Spot surge pricing and rain fees before you order, not after.",
  },
  {
    title: "One search, every app",
    description:
      "Stop opening four apps to compare. QuickCompare does it in one search, under two seconds.",
  },
  {
    title: "Price history",
    description:
      "See if that 'deal' is actually a deal. Track how prices move across the week.",
  },
];

export function AppsStrip() {
  return (
    <section id="apps" className="border-y border-black/5 bg-[#F2F2EE] py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
        {DELIVERY_APPS.map((app) => (
          <span
            key={app}
            className="text-lg font-extrabold tracking-tight text-[#192837]/50"
          >
            {app}
          </span>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-4xl font-black tracking-tight uppercase sm:text-5xl">
        How it works
      </h2>
      <ol className="mt-14 grid gap-10 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="text-center md:text-left">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#7342E2] text-xl font-black text-white">
              {index + 1}
            </span>
            <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-[#454745]">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="bg-[#F2F2EE] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-black tracking-tight uppercase sm:text-5xl">
          Built to save you money
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-[#454745]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="text-4xl font-black tracking-tight uppercase sm:text-6xl">
        Stop overpaying
        <br />
        on every order
      </h2>
      <p className="mx-auto mt-6 max-w-lg text-lg text-[#454745]">
        Free to use. No account needed for your first comparison.
      </p>
      <a
        href="#"
        className="mt-10 inline-block rounded-full bg-[#7342E2] px-10 py-4 text-lg font-bold text-white transition-shadow hover:shadow-[0_8px_32px_rgba(115,66,226,0.35)]"
      >
        Compare prices now
      </a>
    </section>
  );
}

export function Footer() {
  const columns = [
    { heading: "Product", links: ["Features", "Supported apps", "Pricing"] },
    { heading: "Company", links: ["About", "Blog", "Careers"] },
    { heading: "Support", links: ["Help center", "Contact", "Privacy"] },
  ];

  return (
    <footer className="border-t border-black/5 bg-[#192837] py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        {columns.map((column) => (
          <div key={column.heading}>
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#b39cf0]">
              {column.heading}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-12 max-w-6xl px-6 text-sm text-white/60">
        © 2026 QuickCompare. Hackathon build.
      </p>
    </footer>
  );
}
