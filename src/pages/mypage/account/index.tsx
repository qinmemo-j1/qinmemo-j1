import React from "react";
import { NextPage } from "next";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Account: NextPage = () => {
  const google = () => {
    alert("google");
  };

  const apple = () => {
    alert("apple");
  };

  const router = useRouter();
  const handleClickReturn = () => {
    return router.back();
  };

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
              onClick={google}
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
              onClick={apple}
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
          <span className="font-bold text-red-500 cursor-pointer">
            ログアウト
          </span>
        </li>
        <li className="flex flex-row justify-start mt-8 w-full">
          <span className=" py-2 w-32 font-bold text-red-500 cursor-pointer">
            アカウントの削除
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Account;
