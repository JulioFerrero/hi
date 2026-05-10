import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Builder",
  description: "A visual website builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="isolate">{children}</div>
      </body>
    </html>
  );
}
