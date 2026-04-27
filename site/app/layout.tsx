import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Harpenden.AI — The UK's most AI-fluent town",
    template: "%s · Harpenden.AI",
  },
  description:
    "A vision for Harpenden: a whole town fluent in AI, using it together to protect livelihoods and solve community problems. Developed by Hugo Pickford-Wardle — AI Optimist.",
  openGraph: {
    title: "Harpenden.AI — The UK's most AI-fluent town",
    description:
      "A vision document for Harpenden Town Council. Developed by Hugo Pickford-Wardle — AI Optimist.",
    url: "https://harpenden.ai",
    siteName: "Harpenden.AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`:root { --font-sans: 'Inter', ui-sans-serif, system-ui; --font-display: 'Fraunces', ui-serif, Georgia; }`}</style>
      </head>
      <body className="font-sans">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
