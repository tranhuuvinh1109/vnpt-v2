import { useAppContext } from "@/provider";
import { Avatar } from "../Avatar";
import Image from "next/image";

export const Header = () => {
  const { user } = useAppContext();

  return (
    <header className="bg-element-bg-secondary flex items-center justify-between border-b border-b-gray-500 p-2 px-3 shadow-lg md:justify-end md:border-none md:shadow-none">
      <div className="relative h-8 w-24 p-2 md:hidden">
        <Image alt="logo" src="/images/logo.png" fill />
      </div>
      {user && (
        <div>
          <div className="block h-fit w-fit md:hidden">
            <Avatar size={20} className="rounded-full border p-2" />
          </div>
          <div className="hidden h-fit w-fit md:block">
            <Avatar size={24} className="rounded-full border p-2" />
          </div>
        </div>
      )}
    </header>
  );
};
