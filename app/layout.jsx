import "./globals.css";
import { Inter, Bricolage_Grotesque } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vivek-portfolio.vercel.app"),
  title: "Vivek Singh — Full Stack Developer",
  description:
    "Full Stack Developer (MERN / Next.js) based in Dehradun, India. I design and ship production-ready web apps — authentication, payments, real-time features, and cloud deployment.",
  keywords: [
    "Vivek Singh",
    "Full Stack Developer",
    "MERN",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Vivek Singh" }],
  openGraph: {
    title: "Vivek Singh — Full Stack Developer",
    description:
      "I design and ship production-ready web apps with the MERN stack and Next.js.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
