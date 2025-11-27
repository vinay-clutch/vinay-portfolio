import "./globals.css";
import { getUrl } from "@/utilities/getUrl";
import { Geist_Mono, Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { MouseGlow } from "@/components/mouse-glow";
type Props = {
  children: React.ReactNode;
};

const GeistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-geist-sans bg-white/50 dark:bg-zinc-900 text-foreground relative min-h-screen"
        suppressHydrationWarning={true}>
        <MouseGlow />
        <ThemeProvider defaultTheme="system" storageKey="ahmet-theme">
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-M80GLPRQFQ" />
      <Analytics />
    </html>
  );
};

export default RootLayout;

export const viewport: Viewport = {
  themeColor: "#ffffff",
  initialScale: 1,
};

const fallbackUrl = "https://vinaybs.dev";
const siteUrl =
  typeof getUrl === "string" && !getUrl.includes("undefined")
    ? getUrl
    : fallbackUrl;
const description =
  "Full Stack Developer crafting premium MERN & AI experiences with a focus on performance, accessibility, and thoughtful UX.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vinay B. S. — Full Stack Developer",
    template: "%s | Vinay B. S.",
  },
  description,
  keywords: [
    "Vinay B. S.",
    "Full Stack Developer",
    "MERN",
    "JavaScript",
    "React",
    "Next.js",
    "AI developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Vinay B. S. — Full Stack Developer",
    description,
    url: siteUrl,
    siteName: "Vinay B. S. Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Vinay B. S. — Full Stack Developer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay B. S. — Full Stack Developer",
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/avatar.jpg",
    shortcut: "/avatar.jpg",
    apple: "/avatar.jpg",
  },
  alternates: {
    canonical: siteUrl,
  },
};
