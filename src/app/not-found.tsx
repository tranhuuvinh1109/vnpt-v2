"use client";
import { Undo2 } from "lucide-react";

import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { PATH } from "@/enum";
import Image from "next/image";
const NotFoundPage: NextPage = () => {
  const route = useRouter();
  const hanldeBackHome = () => {
    route.push(PATH.HOME);
  };
  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <div className="md:max-w-auto relative h-40 w-60 md:h-96 md:w-96">
          <Image src="/images/404-Error-Animation-4.gif" alt="not-found-gif" fill />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-lg font-medium">Không tồn tại trang này</h1>
          <button
            onClick={hanldeBackHome}
            className="bg-element-main mx-auto flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-white hover:opacity-85 md:px-6 md:py-3"
          >
            <Undo2 size={20} />
            Trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
