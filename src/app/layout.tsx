import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#000] text-white min-h-screen">
        <Navbar />
        <main>{children}</main> {/* Removed padding here */}
      </body>
    </html>
  );
}