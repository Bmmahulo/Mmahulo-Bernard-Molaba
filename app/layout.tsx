import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mmahulo Bernard Molaba — Full-Stack & Embedded Systems Engineer",
  description:
    "Final-year Computer Systems Engineering candidate at TUT, specializing in full-stack web development, robotics (ROS2), industrial PLC automation, and AI/ML agents.",
  keywords: [
    "Mmahulo Molaba",
    "Computer Systems Engineering",
    "Full-Stack Developer",
    "ROS2",
    "PLC Automation",
    "AI/ML",
    "Portfolio",
    "TUT",
  ],
  authors: [{ name: "Mmahulo Bernard Molaba" }],
  creator: "Mmahulo Bernard Molaba",
  openGraph: {
    type: "website",
    title: "Mmahulo Bernard Molaba — Portfolio",
    description:
      "Engineering intelligent systems & modern web applications. Robotics, automation, and AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mmahulo Bernard Molaba — Portfolio",
    description: "Full-Stack & Embedded Systems Engineer",
  },
};

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
