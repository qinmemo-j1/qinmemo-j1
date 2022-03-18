import React from "react";
import { NextPage } from "next";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { LogoutModal } from "@/components/Modal/LogoutModal";
import { AccountModal } from "@/components/Modal/AccountModal";

const Account: NextPage = () => {
  const handleGoogleConnect = () => {
    alert("Google連携しました");
  };

  const handleAppleConnect = () => {
    alert("Apple連携しました");
  };

  const router = useRouter();
  const handleClickReturn = () => {
    return router.back();
  };

  // const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
  //   useState(false);
  // const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // const openDeleteAccountModal = () => {
  //   setIsDeleteAccountModalOpen(true);
  // };

  // const closeDeleteAccountModal = () => {
  //   setIsDeleteAccountModalOpen(false);
  // };

  // const openLogoutModal = () => {
  //   setIsLogoutModalOpen(true);
  // };

  // const closeLogoutModal = () => {
  //   setIsLogoutModalOpen(false);
  // };

  return (
    <div className="px-5 mx-auto max-w-xl">
      <div className="flex relative gap-x-6 justify-between items-center mb-8">
        <button
          type="button"
          onClick={handleClickReturn}
          className="grid place-items-center w-10 h-10 font-bold hover:text-blue-400 focus-visible:text-blue-400 hover:bg-blue-50 focus-visible:bg-blue-50  rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition duration-200 ease-in-out"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">アカウント</h1>
        <span></span>
      </div>
      <div className="flex flex-col flex-1 items-center px-2">
        <div className="flex flex-row items-start mt-8 w-full">
          <div className="text-sm font-bold text-gray-400">
            アカウントの連携
          </div>
        </div>
        <div className="flex flex-row justify-between mt-4 w-full ">
          <div className="flex items-center my-auto">
            <FcGoogle className="w-6 h-6" />
          </div>
          <div className="flex-1 py-2 ml-3 font-bold">Google</div>
          <div>
            <button
              className="py-2 w-28 text-black bg-slate-200 rounded-3xl"
              onClick={handleGoogleConnect}
            >
              解除する
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-4 w-full">
          <div className="flex items-center">
            <FaApple className="w-6 h-6" />
            <p className="flex-1 ml-3 font-bold">Apple</p>
          </div>
          <div>
            <button
              className="py-2 w-28 text-white bg-blue-500 rounded-3xl"
              onClick={handleAppleConnect}
            >
              連携する
            </button>
          </div>
        </div>
      </div>
      <section className="flex flex-row items-start mt-8 w-full">
        <div className="text-sm font-bold text-gray-400">アカウントの操作</div>
      </section>
      <ul>
        <li className="flex flex-row items-start mt-8 w-full">
          <LogoutModal />
        </li>
        <li className="flex flex-row justify-start mt-8 w-full">
          <AccountModal />
        </li>
      </ul>
    </div>
  );
};

export default Account;
