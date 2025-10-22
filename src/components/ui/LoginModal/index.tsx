import { MonitorCheck } from "lucide-react";
import { useState } from "react";
import Toast from "react-hot-toast";
import { LoadingPage } from "../Loading";
import { Modal } from "../Modal";
import { useAppContext } from "@/provider";
import { E_LOCAL_STORAGE } from "@/enum";
import { useSignIn } from "@/api";
import Image from "next/image";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const { setUser, setIsOpenLoginModal } = useAppContext();

  const { mutate: signIn, isPending: isPendingSignIn } = useSignIn();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) return;
    signIn(formValue, {
      onSuccess: (data: any) => {
        localStorage.setItem(E_LOCAL_STORAGE.APP_NAME, JSON.stringify(data));
        setUser(data);
        setIsOpenLoginModal(false);
        Toast.success("Đăng nhập thành công!");
      },
      onError: (e: any) => {
        console.log(e);
        Toast.error("Đăng nhập thất bại!");
      },
    });
  };

  return (
    <>
      <LoadingPage isPending={isPendingSignIn} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:flex md:w-2/5 md:items-center md:justify-center md:rounded-l-xl md:bg-blue-500 md:text-white">
            <Image src="/images/logo.png" alt="logo" className="mx-auto max-w-48 md:hidden" fill />
            <h1 className="font-montserrat text-center text-xl font-semibold text-blue-600 md:hidden">
              Đăng nhập
            </h1>
            <div className="hidden md:block">
              <MonitorCheck size={60} />
            </div>
          </div>
          <form className="flex flex-col gap-4 md:flex-1" onSubmit={handleSubmit}>
            <div className="hidden md:block">
              <div className="relative mx-auto hidden h-12 max-w-48 md:block md:pb-10">
                <Image src="/images/logo.png" alt="logo" className="" fill />
              </div>
              <h1 className="font-montserrat text-center text-xl font-semibold text-blue-600">
                Đăng nhập
              </h1>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-base font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-base font-medium text-gray-700">
                Mật khẩu:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
            <button
              className="mt-6 rounded-md bg-blue-900 px-4 py-3 font-semibold text-white"
              type="submit"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
