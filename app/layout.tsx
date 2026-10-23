import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "에어몬 Airmon",
  description: "에어몬 회사소개와 에어몬2 프리미엄S 쿨시팅매트 제품 소개",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
