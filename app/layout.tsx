import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RockBeton - Качественный бетон и строительные материалы",
  description: "RockBeton - надежный поставщик бетона, щебня, песка и растворов. Более 10 лет опыта, собственный автопарк, доставка 24/7. Звоните: +7 707 787 11 55",
  keywords: "бетон, купить бетон, бетон Алматы, щебень, песок, раствор, строительные материалы, доставка бетона",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
