import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ai money - Manage your finances wisely",
  description:
    "Sistema de gestión financiera potenciado con inteligencia artificial para organizar tus finanzas personales y empresariales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body
          className={`${poppins.variable} ${inter.variable} antialiased bg-[#f8fafc] text-gray-900`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
