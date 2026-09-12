import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "Travel Guide",
  description: "Discover the world with our expert travel guide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`${poppins.className} w-screen h-screen bg-black`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
