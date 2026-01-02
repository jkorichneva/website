import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Iana Korichneva",
  description: "Personal website of ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Pacifico&display=swap"
          rel="stylesheet"/>
      <title>Iana Korichneva</title>
    </head>
    <body className={inter.className}>
    <Header/>
    <main className="max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
    <Footer/>
    </body>
    </html>
  );
}
