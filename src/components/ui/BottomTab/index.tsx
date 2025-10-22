import { SIDEBARS } from "@/constant";
import { useAppContext } from "@/provider";
import Link from "next/link";

export const BottomTab = () => {
  const { pathActive, setPathActive } = useAppContext();

  return (
    <div className="border-t-overlay bg-element-bg-secondary fixed right-0 bottom-0 left-0 z-10 border-t py-1 md:hidden">
      <div className="flex gap-2 px-1">
        {SIDEBARS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.url}
              className={`hover:bg-element-main flex-1 rounded-md text-gray-600 hover:text-white ${pathActive === item.url ? "!bg-element-main !text-white" : ""}`}
              title={item.label}
              key={item.url}
              onClick={() => setPathActive(item.url)}
            >
              <div className="flex flex-col items-center justify-center gap-1 py-2">
                <Icon size={20} />
                <span className="line-clamp-1 text-center text-[10px] font-medium">
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
