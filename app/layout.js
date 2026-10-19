import { DM_Serif_Display, Noto_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Cookie from "@/components/Cookie";
import "./globals.css";

const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--serif" });
const sans = Noto_Sans({ subsets: ["latin"], variable: "--sans" });

export const metadata = { title: "TruckLink - Connect Drivers Directly with Companies" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <Nav />
        <main>{children}</main>
        <footer className="footer">© 2026 TruckLink. Direct freight, zero commission.</footer>
        <Cookie />
      </body>
    </html>
  );
}
