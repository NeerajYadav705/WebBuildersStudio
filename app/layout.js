import localFont from "next/font/local";
import "./globals.css";
import { Alexandria } from "next/font/google";

const alex = Alexandria({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Web Builders Studio",
  description:
    "Web Builders Studio creates custom websites that blend design and functionality to help businesses build a strong online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${alex.className} `}
      >
        {children}
      </body>
    </html>
  );
}
