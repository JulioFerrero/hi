import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Builder - Editor",
  description: "Visual website builder editor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <div className="isolate">{children}</div>
      </body>
    </html>
  );
}
