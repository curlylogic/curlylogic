import "../globals.scss";
import { Mulish } from "next/font/google";
import MetaData from "@cl/utils/metadata";
import Logo from "@cl/components/Logo";
import Header from "@cl/components/Header";
import Navigation from "@cl/components/Navigation";
import { Analytics } from "@vercel/analytics/react";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = MetaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <div className="cl__wrapper">
          <Header>
            <Logo />
            <Navigation />
          </Header>
          <main>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
