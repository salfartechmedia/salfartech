import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import { ThemeProvider } from "@/lib/ThemeContext";
import GlobalStyles from "@/components/GlobalStyles";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salfartech — Digital Marketing & Web Development",
  description:
    "Salfartech is a premier digital marketing and web development agency helping businesses dominate online with cutting-edge strategies.",
  keywords: ["digital marketing", "web development", "SEO", "social media", "Salfartech"],
  authors: [{ name: "Salfartech" }],
  openGraph: {
    title: "Salfartech — Digital Marketing & Web Development",
    description: "Transform your digital presence with Salfartech.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${lora.variable}`}>
      <body>
        <ThemeProvider>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
