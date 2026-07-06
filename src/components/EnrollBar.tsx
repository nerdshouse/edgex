"use client";

import Link from "next/link";

interface EnrollBarProps {
  href?: string;
}

export default function EnrollBar({
  href = "/contact",
}: EnrollBarProps) {
  return (
    <div className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none">
      <div
        className="pointer-events-auto flex items-stretch rounded-full overflow-hidden shadow-lg"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
      >
        <Link
          href={href}
          className="btn-primary flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 whitespace-nowrap rounded-full"
        >
          Enroll Now →
        </Link>
      </div>
    </div>
  );
}
