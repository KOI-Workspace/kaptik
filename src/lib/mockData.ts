/**
 * Mock data for Kaptik landing page
 */

export const MOCK_WAITLIST_COUNT = 1247;

export const MOCK_SITE_LINK = "https://kaptik.app";

export const PRIVACY_POLICY_LINK = "https://notion.so/kaptik-privacy"; // Placeholder - user will provide later

export const faqItems = [
  {
    id: "1",
    question: "Where can I use Kaptik?",
    answer:
      "Kaptik works across Bubble, Fromm, Weverse, YouTube, and all other platforms. You can enjoy accurate subtitles wherever you watch K-pop content.",
  },
  {
    id: "2",
    question: "Is it free?",
    answer:
      "We're working on a pricing plan, but nothing is finalized yet. We'll share details when we launch. Stay tuned!",
  },
  {
    id: "3",
    question: "How does Kaptik achieve high translation quality?",
    answer:
      "We use a K-pop glossary built from fandom vocabulary and slang commonly used by young Koreans. This improves word accuracy significantly. When members speak in English, we detect and keep the English as-is. We also use member voice data for speaker identification, so you always know who's saying what.",
  },
] as const;
