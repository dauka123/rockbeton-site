import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RockBeton - Качественный бетон для строительства",
  description: "RockBeton - надёжный поставщик бетона всех марок: М150, М200, М250, М300, М350, М400. Более 10 лет опыта, собственный автопарк, доставка 24/7. Звоните: +7 707 787 11 55",
  keywords: "бетон, купить бетон, бетон Алматы, М150, М200, М250, М300, М350, М400, строительные материалы, доставка бетона",
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
