import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Integración de Mercado Pago",
  description: "Página para poner a prueba la integracion de la API de mercado pago y realizar compras desde una web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
