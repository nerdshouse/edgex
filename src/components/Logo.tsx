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
        src={logo.lightSrc}
        alt={logo.alt}
        width={isNav ? 140 : 160}
        height={50}
        className="h-9 w-auto object-contain dark:hidden scale-125"
        priority={isNav}
      />
      <Image
        src={logo.darkSrc}

        alt={logo.alt}
        width={isNav ? 140 : 160}
        height={50}
        className="h-9 w-auto object-contain hidden dark:block scale-125"
        priority={isNav}
      />
    </Link>
  );
}
