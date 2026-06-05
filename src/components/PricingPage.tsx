"use client";

import Header from "./Header";
import Footer from "./Footer";

const pricingPlans = [
  {
    name: "Basic",
    price: "$1.29",
    description: "For fans who just want to catch every live moment.",
    features: [
      "Unlimited live video viewing",
      "Get notified for new lives",
    ],
    badge: "Free for the first 1,000 waitlist members",
  },
  {
    name: "Pro",
    price: "$9.9",
    description: "For fans who want subtitles on everything, everywhere.",
    features: [
      "Unlimited subtitles for any video on any channel you want",
      "Notification included",
      "Unlimited live video viewing",
    ],
    badge: null,
  },
];

export default function PricingPage() {
  const goToWaitlist = () => {
    window.location.href = "/#waitlist-form";
  };

  return (
    <div className="relative z-10 min-h-screen bg-white">
      <Header onJoinWaitlist={goToWaitlist} />

      <main className="px-6 pb-24 pt-[152px] md:px-12 lg:px-16">
        <section className="mx-auto max-w-[1360px]">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <h1
              className="text-[clamp(36px,5vw,64px)] font-bold leading-tight tracking-tight"
              style={{
                color: "#0A0A0A",
                letterSpacing: "-0.03em",
              }}
            >
              Choose the plan that fits your fandom life.
            </h1>
          </div>

          <div className="mx-auto flex max-w-[760px] flex-col flex-wrap justify-center gap-5 sm:flex-row">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className="flex min-h-[440px] w-full flex-col rounded-[16px] border border-[#EAEAEA] bg-white p-7 sm:w-[360px]"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="mb-8">
                  {plan.badge && (
                    <span className="mb-4 inline-flex items-center rounded-[999px] border border-[#C4B5FD] bg-[#8B5CF6] px-3.5 py-1.5 text-xs font-semibold text-white">
                      {plan.badge}
                    </span>
                  )}
                  <h2
                    className="mb-4 text-2xl font-bold tracking-tight text-[#0A0A0A]"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {plan.name}
                  </h2>
                  <p className="mb-6 text-[15px] leading-relaxed text-[#525252]">
                    {plan.description}
                  </p>
                  <div className="flex items-end gap-2">
                    <span
                      className="text-5xl font-bold tracking-tight text-[#0A0A0A]"
                      style={{ letterSpacing: "-0.04em" }}
                    >
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-[#737373]">/ month</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-[15px] leading-relaxed text-[#0A0A0A]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5CF6]"
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
