import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oscar Lund | Multimedia Designer & Web Developer",
  description: "Portfolio matching the aesthetic of top video platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-mux-bg text-foreground font-sans`}>
        <div className="flex flex-col min-h-screen selection:bg-mux-pink selection:text-white">
          <Navigation />
          <main className="flex-1 mt-[72px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
