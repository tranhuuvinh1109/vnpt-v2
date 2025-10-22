import Toast from "react-hot-toast";
import { E_LOCAL_STORAGE, PATH } from "../enum";
import { useAppContext } from "../provider/context";
import { useRouter } from "next/navigation";

export const useSignOut = () => {
  const router = useRouter();
  const { setUser } = useAppContext();

  const handleSignOut = () => {
    setUser(undefined);
    router.replace(PATH.HOME);
    localStorage.removeItem(E_LOCAL_STORAGE.APP_NAME);
    Toast.success("Đăng xuất thành công!");
  };
  return { handleSignOut };
};
