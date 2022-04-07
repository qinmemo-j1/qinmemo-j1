import React from "react";
import Link from "next/link";
import Content from "@/components/Mypage/Content";
import { Layout } from "@/layouts";
import { VFC } from "react";
import { XIcon, CogIcon, LogoutIcon } from "@heroicons/react/solid";

const Mypage: VFC = () => {
  const menuContents = [
    {
      title: "設定",
      mypageItems: [
        { item: "プロフィール設定", path: "/mypage/profile" },
        { item: "アカウント設定", path: "/mypage/account" },
        {
          item: "テーマ",
          path: "/Mypage/themesettings",
          settingItem: "OSの設定に合わせる",
        },
      ],
    },
    {
      title: "サポート",
      mypageItems: [
        { item: "プライバシーポリシー", path: "/mypage/support/privacy" },
        { item: "利用規約", path: "/mypage/support/terms" },
        { item: "オープンソースライセンス", path: "" },
      ],
    },
  ];

  return (
    <Layout>
      <div className="relative px-6">
        <div className="py-6 mx-auto max-w-2xl">
          <div className="flex justify-between justify-items-center lg:hidden">
            <span className="flex flex-col justify-center">
              <XIcon className="w-6 h-6" />
            </span>
            <h1 className="text-xl font-bold">アカウント</h1>
            <span></span>
          </div>
          {menuContents.map((menuContents) => {
            return (
              <>
                <div key={menuContents.title}>
                  <Content mypageContent={menuContents} />
                </div>
              </>
            );
          })}
          <ul className="relative font-bold ">
            <li className="mt-8">
              <Link href="/">お問い合わせ</Link>
            </li>
            <li className="flex justify-between mt-8">
              <span>バージョン</span>
              <span>1.0.0</span>
            </li>
          </ul>
        </div>
        <ul className="hidden absolute top-0 right-[max(calc((((100vw-1024px)/2)-calc(100vw/12))+18px),0px)] flex-col py-4 w-1/4 rounded-lg border drop-shadow-sm lg:flex">
          <Link href="/">
            <li className="flex gap-x-3 items-center py-2 px-4 hover:bg-gray-100">
              <span>
                <CogIcon className="w-6 h-6" />
              </span>
              <span>設定</span>
            </li>
          </Link>
          <li className="flex gap-x-3 items-center py-2 px-4 text-red-600 hover:bg-gray-100">
            <span>
              <LogoutIcon className="w-6 h-6" />
            </span>
            <span>ログアウト</span>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Mypage;
