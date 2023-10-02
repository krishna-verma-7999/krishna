import "../globals.css";

export const metadata = {
  title: "Rajveer | Personal Portfolio",
  description: "Rajveer is a full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="mt-0">
      <body>{children}</body>
    </html>
  );
}
