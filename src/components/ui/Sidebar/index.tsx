import { SIDEBARS } from "@/constant";
import { useSignOut } from "@/hook";
import { useAppContext } from "@/provider";
import { LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Sidebar = () => {
  const { handleSignOut } = useSignOut();
  const { pathActive, setPathActive } = useAppContext();

  return (
    <div className="hidden h-screen w-72 flex-col p-2 md:flex">
      <Link href={"/"} className="relative mx-auto h-14 w-52 py-4">
        <Image alt="logo" src="/images/logo.png" className="" fill />
      </Link>
      <div className="flex flex-1 flex-col gap-2">
        {SIDEBARS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.url}
              href={item.url}
              onClick={() => setPathActive(item.url)}
              className={`hover:bg-element-main flex cursor-pointer items-center gap-2 rounded-xl p-3 text-gray-600 hover:text-white ${item.url === pathActive ? "bg-element-main text-white!" : ""}`}
            >
              <Icon fontSize={24} />
              <span className="text-base font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div>
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-2 rounded-xl p-3 text-gray-600 hover:bg-red-400 hover:text-white"
        >
          <LogOut /> <span className="text-base font-medium">Đăng Xuất</span>
        </button>
      </div>
    </div>
  );
};
