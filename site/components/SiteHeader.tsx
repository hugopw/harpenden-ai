"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Wordmark } from "./Wordmark";
import { ModeSwitch } from "./ModeSwitch";

const RESIDENT_PREFIXES = [
  "/welcome",
  "/im-a-leader",
  "/im-a-teen",
  "/im-volunteering",
  "/our-organisation",
  "/submit-a-problem",
  "/community-projects",
];

const councilNav = [
  { href: "/community", label: "The town" },
  { href: "/challenges", label: "Challenges" },
  { href: "/interventions", label: "Interventions" },
  { href: "/journey", label: "Journey" },
  { href: "/council", label: "For the council" },
];

const residentNav = [
  { href: "/im-a-leader", label: "Leaders" },
  { href: "/im-a-teen", label: "Teens" },
  { href: "/im-volunteering", label: "Volunteering" },
  { href: "/our-organisation", label: "Organisations" },
  { href: "/community-projects", label: "Live projects" },
];

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const isResident = RESIDENT_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
  const nav = isResident ? residentNav : councilNav;
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <header
        className={clsx(
          "sticky top-0 z-40 border-b backdrop-blur",
          isResident
            ? "border-midnight/10 bg-chalk/85"
            : "border-ink/10 bg-chalk/80"
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link
            href={isResident ? "/welcome" : "/"}
            className="flex items-center gap-2"
          >
            <Wordmark size="md" tone={isResident ? "midnight" : "default"} />
          </Link>
          <nav className="hidden items-center gap-5 text-sm md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "transition",
                  isResident
                    ? "text-midnight/75 hover:text-midnight"
                    : "text-ink/80 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {isResident ? null : (
              <Link
                href="/council#meet"
                className="hidden rounded-full border border-ink/20 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm transition hover:border-ink/40 lg:inline-flex"
              >
                Book the council meeting
              </Link>
            )}
            <ModeSwitch />
          </div>
        </div>
      </header>
    </>
  );
}
