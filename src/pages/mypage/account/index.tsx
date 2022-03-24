import React, { useState } from "react";
import { NextPage } from "next";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { AlertModal } from "@/components/Modal/AlertModal";

const Account: NextPage = () => {
  const handleGoogleConnect = () => {
    alert("Google連携しました");
  };

  const handleAppleConnect = () => {
    alert("Apple連携しました");
  };

  const router = useRouter();

  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);

  const handleClickReturn = () => {
    return router.back();
  };

  const handleModalActions = [
    {
      isOpen: isOpenLogout,
      setIsOpen: setIsOpenLogout,
      title: "ログアウト",
      message: "ログアウトしてよろしいですか？",
      onClick: handleClickReturn,
      buttonChildren: "ログアウト",
    },
    {
      isOpen: isOpenAccount,
      setIsOpen: setIsOpenAccount,
      title: "アカウントの削除",
      message: "アカウントを完全に削除してよろしいですか？",
      onClick: () => alert("アカウントを削除しました"),
      buttonChildren: "アカウントの削除",
    },
  ];

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
      <div className="flex flex-col flex-1 items-center px-2">
        <section className="flex flex-row items-start mt-8 w-full">
          <div className="text-sm font-bold text-gray-400">
            アカウントの操作
          </div>
        </section>
      </div>

      {handleModalActions.map((item) => (
        <div key={item.title}>
          <button
            className="  p-2 mt-4 mb-3 font-bold text-red-500 dark:text-red-400 hover:bg-slate-100 rounded-sm dark:hover:bg-darkhover modal-button"
            onClick={() => item.setIsOpen(true)}
          >
            {item.buttonChildren}
          </button>
          <AlertModal
            isOpen={item.isOpen}
            setIsOpen={item.setIsOpen}
            message={item.message}
            title={item.title}
            onClick={item.onClick}
          />
        </div>
      ))}
    </div>
  );
};

export default Account;
