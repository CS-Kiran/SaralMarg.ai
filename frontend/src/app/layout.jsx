import "./globals.css";

export const metadata = {
  title: "SaralMarg.ai",
  description:
    "A smart civic engagement platform for reporting, tracking, and resolving road infrastructure issues",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
