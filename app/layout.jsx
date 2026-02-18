import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin8000 - Visão geral",
  // description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Header />
            <main className="content">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
