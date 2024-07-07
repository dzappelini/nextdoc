// src/app/layout.tsx
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Meu Site",
  description: "Descrição global do meu site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
