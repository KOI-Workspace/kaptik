"use client";

import { useState, useCallback } from "react";
import Header from "./Header";
import Hero from "./Hero";
import WhyKaptik from "./WhyKaptik";
import AvailableDevices from "./AvailableDevices";
import AvailablePlatforms from "./AvailablePlatforms";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import WaitlistModal from "./WaitlistModal";
import ThankYouModal from "./ThankYouModal";

export default function LandingPage() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [thankYouOpen, setThankYouOpen] = useState(false);

  const openWaitlist = useCallback(() => setWaitlistOpen(true), []);
  const closeWaitlist = useCallback(() => setWaitlistOpen(false), []);

  const handleWaitlistSuccess = useCallback(() => {
    setThankYouOpen(true);
  }, []);

  const scrollToFeatures = useCallback(() => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="relative z-10 min-h-screen">
      <Header onJoinWaitlist={openWaitlist} />
      <main>
        <Hero
          onJoinWaitlist={openWaitlist}
          onHowToUse={scrollToFeatures}
        />
        <WhyKaptik />
        <AvailableDevices />
        <AvailablePlatforms />
        <FAQ onJoinWaitlist={openWaitlist} />
        <Testimonials />
        <section className="relative px-6 pb-20 pt-6 md:px-12 lg:px-16">
          <div className="mx-auto max-w-[800px]">
            <div className="mt-8 flex justify-center">
              <button
                onClick={openWaitlist}
                className="rounded-[999px] px-8 py-4 text-base font-medium transition-all hover:opacity-95 hover:shadow-[0 10px 28px rgba(94,76,230,0.35)] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
                style={{
                  background: "#5E4CE6",
                  color: "#FFFFFF",
                  boxShadow: "0 6px 20px rgba(94,76,230,0.25)",
                }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </section>
      </main>

      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={closeWaitlist}
        onSuccess={handleWaitlistSuccess}
      />
      <ThankYouModal isOpen={thankYouOpen} onClose={() => setThankYouOpen(false)} />
    </div>
  );
}
