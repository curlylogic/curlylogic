import "../globals.scss";
// import { Poppins } from "next/font/google";
// import Header from "@cl/components/Header";
import MetaData from "@cl/utils/metadata";
import ThemeWrapper from "@cl/components/ThemeWrapper";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata = MetaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeWrapper>{children}</ThemeWrapper>
    //   <html lang="en">
    //   <body className={poppins.className}>
    //     <ThemeWrapper>
    //       <Header />
    //       <main>{children}</main>
    //     </ThemeWrapper>
    //   </body>
    // </html>
  );
}
