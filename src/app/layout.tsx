import type { Metadata } from "next";

import { Noto_Sans_JP } from "next/font/google";

const notoSansJP400 = Noto_Sans_JP({
  weight: '400',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: `aueno`,
  description: `auenoのポートフォリオページです．`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={notoSansJP400.className}
      >
        {children}
      </body>
    </html>
  );
}
