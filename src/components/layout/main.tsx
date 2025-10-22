"use client";

import { AppContext, ReactQueryProvider } from "@/provider";
import { PropsWithChildren } from "react";
import { UserLayout } from "./user";

type MainLayoutProps = PropsWithChildren;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <AppContext>
        <ReactQueryProvider>
          <UserLayout>{children}</UserLayout>
        </ReactQueryProvider>
      </AppContext>
    </>
  );
};
