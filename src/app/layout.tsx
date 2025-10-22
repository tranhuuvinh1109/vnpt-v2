import { FC, PropsWithChildren } from "react";

import { geistMono, geistSans } from "@/config";

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { MainLayout } from "@/components/layout";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js TypeScript Template",
  description: "A professional Next.js template with TypeScript",
};
type TProps = PropsWithChildren;
const RootLayout: FC<TProps> = ({ children }) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Toaster position="top-center" reverseOrder={false} />
      <MainLayout>{children}</MainLayout>
    </body>
  </html>
);

export default RootLayout;
