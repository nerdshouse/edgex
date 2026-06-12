import Image from "next/image";
import Link from "next/link";
import { logo } from "@/data/site";

export default function Logo({
  className = "",
  variant = "nav",
}: {
  className?: string;
  variant?: "nav" | "footer";
}) {
  const isNav = variant === "nav";

  return (
    <Link
      href="/"
      className={`inline-flex items-center shrink-0 ${
        isNav ? "pr-3 border-r border-[var(--border)] mr-1" : ""
      } ${className}`}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={isNav ? 100 : 120}
        height={32}
        className="h-7 w-auto object-contain"
        priority={isNav}
      />
    </Link>
  );
}
