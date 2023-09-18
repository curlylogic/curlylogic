import "../globals.scss";
import MetaData from "@cl/utils/metadata";
import ThemeWrapper from "@cl/components/ThemeWrapper";

export const metadata = MetaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeWrapper>{children} </ThemeWrapper>;
}
