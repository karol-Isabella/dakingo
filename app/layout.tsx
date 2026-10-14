import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dakingo | Pasteles para celebrar",
  description: "Pasteles, postres y detalles frescos para cada celebración.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
