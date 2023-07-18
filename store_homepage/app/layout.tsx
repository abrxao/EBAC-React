"use client";
import "./globals.css";
import type { Metadata } from "next";
import { adiFont } from "./fonts";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/utils/queryClient";
import useGlobalState from "@/stores/modalStore";

export const metadata: Metadata = {
  title: "adidas Brasil Loja",
  description:
    "Na loja oficial da adidas Brasil, você vai encontrar tênis, roupas esportivas e material esportivo criados com tecnologaa e design. Clique aqui para comprar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMenuOpen, isFavsBarOpen } = useGlobalState();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body
          className={`${(isMenuOpen || isFavsBarOpen) && "overflow-hidden"} ${
            adiFont.className
          }`}
        >
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
