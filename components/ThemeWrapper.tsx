"use client";

import { Poppins } from "next/font/google";
import Header from "@cl/components/Header";
import useLocalStorage from "use-local-storage";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark-mode");

  return (
    <html lang="en" className={theme}>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
};

export default ThemeWrapper;
