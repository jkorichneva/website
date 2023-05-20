import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jana Korichneva",
  description: "Personal website of ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="lg:mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:min-w-[80rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
