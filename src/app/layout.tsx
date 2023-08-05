import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import { Provider } from "@/providers";
import { DesktopHeaderPattern, MobileBgPatternHeaderIcon } from "@/components";
import { Navbar } from "@/components/ui/Navbar";

import "./globals.css";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kumbh.className}`}>
        <Provider>
            <header className="w-full flex flex-col justify-between bg-violet md:rounded-bl-[100px]">
              <Navbar />
              <div className="flex justify-end md:hidden">
                <MobileBgPatternHeaderIcon />
              </div>
              <div className="md:flex justify-end hidden">
                <DesktopHeaderPattern/>
              </div>
            </header>
            {children}
        </Provider>
      </body>
    </html>
  );
}
