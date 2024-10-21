import { font } from "@/lib/fonts";
import "./globals.css";

export const metadata = {
  title: "Zeris technologies",
  description: "Empowering Businesses, One Cloud at a Time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
