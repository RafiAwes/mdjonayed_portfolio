import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/content/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.intro,
  openGraph: { title: `${site.name} — ${site.role}`, description: site.intro, type: "website" },
};

export const viewport: Viewport = { themeColor: "#0d1117" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} antialiased`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
