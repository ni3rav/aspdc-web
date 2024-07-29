import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "ASPDC",
    template: "%s | ASPDC",
  },
  description: "The official portal of ASPDC",
  keywords: ["aspdc", "adani", "student", "programming", "coding"],
  twitter: {
    site: "@aspdc_club",
  },
  other: {
    github: "https://github.com/aspdc",
    linkedin: "https://www.linkedin.com/company/adani-student-programming-and-development-club/",
    youtube: "https://www.youtube.com/@clubaspd",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aspdc.vercel.app",
    title: "ASPDC",
    description: "The official portal of ASPDC.",
    images: [
      {
        url: "https://aspdc.vercel.app/logo.png",
        alt: "ASPDC",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}; 

export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
