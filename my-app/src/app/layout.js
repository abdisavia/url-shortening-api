import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata = {
  title: "Shortly",
  description: "Shortening your URL",
  icons: {
    icon: [
      {
        url: "/icon?<generated>",
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
