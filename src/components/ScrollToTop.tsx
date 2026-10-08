"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  // Hide while the patient video grid is on screen so the button never sits on a video card.
  const [overVideos, setOverVideos] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOverVideos(false);
    const block = document.querySelector("[data-video-reviews]");
    if (!block) return;
    const observer = new IntersectionObserver(([entry]) => setOverVideos(entry.isIntersecting));
    observer.observe(block);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-20 right-4 xl:bottom-8 xl:right-8 z-40 w-10 h-10 rounded-full bg-[var(--sv-navy)] text-white shadow-lg",
        "flex items-center justify-center transition-all duration-300",
        "hover:bg-[var(--sv-teal)] hover:scale-110",
        visible && !overVideos ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
