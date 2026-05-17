import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <div className="isolate">{children}</div>
      </body>
    </html>
  );
}
