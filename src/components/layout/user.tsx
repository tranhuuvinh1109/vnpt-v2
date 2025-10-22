"use client";

import { useMe } from "@/api";
import { useAppContext } from "@/provider";
import { PropsWithChildren, useEffect } from "react";
import { BottomTab, Container, Header, LoadingPage, LoginModal, Sidebar } from "../ui";

type UserLayoutProps = PropsWithChildren;

export const UserLayout = ({ children }: UserLayoutProps) => {
  const { setUser, isOpenLoginModal, setIsOpenLoginModal } = useAppContext();

  const { data: userProfile, isPending: isPendingUserProfile } = useMe();

  const onClose = () => {
    return;
  };

  useEffect(() => {
    if (!userProfile) {
      !isPendingUserProfile && setIsOpenLoginModal(true);
      return;
    }
    setUser(userProfile);
    setIsOpenLoginModal(false);
  }, [userProfile, isPendingUserProfile]);

  return (
    <>
      <LoadingPage isPending={isPendingUserProfile} />
      <div className="text-back font-montserrat flex h-screen w-full overflow-hidden overflow-y-hidden">
        <Sidebar />
        <Container className="flex flex-1 flex-col overflow-hidden bg-slate-300!">
          <>
            <Header />
            <div className="p2 mb-16 flex-1 overflow-y-auto bg-gray-100 md:mx-2 md:mt-2 md:mb-0 md:rounded-lg">
              {children}
            </div>
          </>
        </Container>
        <BottomTab />
      </div>
      <LoginModal isOpen={isOpenLoginModal} onClose={onClose} />
    </>
  );
};
