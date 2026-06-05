"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabaseClient";

interface WaitlistFormProps {
  onSuccess: () => void;
}

const WAITLIST_DISPLAY_OFFSET = 200;
const WAITLIST_LIMIT = 1000;

export default function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const displayCount = waitlistCount ?? WAITLIST_DISPLAY_OFFSET;
  const spotsLeft = Math.max(WAITLIST_LIMIT - displayCount, 0);

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      const supabase = getSupabaseClient();
      const { count, error: countError } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });

      if (countError) {
        console.error(countError);
        return;
      }

      if (typeof count === "number") {
        setWaitlistCount(WAITLIST_DISPLAY_OFFSET + count);
      }
    };

    fetchWaitlistCount();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = email.trim().toLowerCase();
    if (!trimmed) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    if ((waitlistCount ?? WAITLIST_DISPLAY_OFFSET) >= WAITLIST_LIMIT) {
      setError("The waitlist is full.");
      return;
    }

    setIsSubmitting(true);
    try {
      const supabase = getSupabaseClient();
      const { error: insertError } = await supabase.from("waitlist").insert({
        email: trimmed,
      });

      if (insertError) {
        // 이미 등록된 이메일은 실패가 아니라 신청 완료로 처리한다.
        const duplicateError = insertError as { code?: string; message?: string };
        if (
          duplicateError.code === "23505" ||
          duplicateError.message?.includes("duplicate key value")
        ) {
          onSuccess();
          setEmail("");
          return;
        }

        console.error(insertError);
        setError("Something went wrong. Please try again.");
        return;
      }

      try {
        if (typeof window !== "undefined") {
          void fetch("/api/meta/conversion", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              eventName: "Lead",
              userEmail: trimmed,
              eventSourceUrl: window.location.href,
            }),
          });
        }
      } catch (conversionError) {
        console.error("Meta conversion API call failed (waitlist):", conversionError);
      }

      setEmail("");
      setWaitlistCount((current) => (current === null ? current : current + 1));
      onSuccess();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="waitlist-form"
      onSubmit={handleSubmit}
      className="mt-5 w-full max-w-[560px] min-w-0 sm:mt-8"
    >
      <div className="flex min-w-0 flex-row gap-2 rounded-[18px] border border-[#EAEAEA] bg-white p-2 shadow-[0_16px_45px_rgba(10,10,10,0.08)] sm:gap-3">
        <input
          id="waitlist-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={isSubmitting}
          className="min-h-[48px] min-w-0 flex-1 rounded-[12px] px-3 text-[15px] text-[#0A0A0A] outline-none placeholder:text-[#A3A3A3] disabled:opacity-60 sm:min-h-[52px] sm:px-4 sm:text-base"
          aria-invalid={!!error}
          aria-describedby={error ? "waitlist-email-error" : "waitlist-meta"}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="min-h-[48px] shrink-0 whitespace-nowrap rounded-[999px] bg-[#0A0A0A] px-4 text-[13px] font-medium text-white transition-colors hover:bg-[#262626] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-45 focus:outline-none sm:min-h-[52px] sm:px-6 sm:text-base"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </button>
      </div>

      {error && (
        <p id="waitlist-email-error" className="mt-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <div id="waitlist-meta" className="mt-3 flex justify-center sm:mt-4">
        <p className="waitlist-bubble relative whitespace-nowrap rounded-[999px] border border-[#C4B5FD] bg-[#8B5CF6] px-3.5 py-2 text-center text-[11px] font-medium leading-none text-white shadow-[0_10px_24px_rgba(139,92,246,0.22)] sm:px-5 sm:py-2.5 sm:text-sm">
          <span className="font-bold text-white">
            {displayCount.toLocaleString()}
          </span>{" "}
          people joined.{" "}
          <span className="font-bold text-white">
            {spotsLeft.toLocaleString()}
          </span>{" "}
          spots left for the free{" "}
          <Link
            href="/pricing"
            className="font-bold text-white underline underline-offset-2 transition-opacity hover:opacity-80"
          >
            Basic Plan
          </Link>{" "}
          trial.
        </p>
      </div>
    </form>
  );
}
