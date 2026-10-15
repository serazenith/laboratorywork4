import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MusicBox | Find your sound",
  description: "A music store catalog demonstrating Flexbox, CSS Grid and typed React lists."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
