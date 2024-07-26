import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "ASPDC",
    template: "%s | ASPDC",
  },
  description: "The official protal of ASPDC",
  keywords: ["aspdc", "adani", "student", "programming", "coding"],
  twitter: {
    site: "@aspdc_club",
  },
  other: {
    github: "https://github.com/aspdc",
    linkedin: "https://www.linkedin.com/company/adani-student-programming-and-development-club/",
    youtube: "https://www.youtube.com/@clubaspd",
  },
}; 

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
          {children}
          <>Hello guysz</>
        </ThemeProvider>
      </body>
    </html>
  );
}
