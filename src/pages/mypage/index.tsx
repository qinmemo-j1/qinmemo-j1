import React from "react";
import Link from "next/link";
import Content from "@/components/Mypage/Content";
import { Layout } from "@/layouts";
import { VFC } from "react";
import { CogIcon, LogoutIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";

const Mypage: VFC = () => {
  const menuContents = [
    {
      title: "設定",
      mypageItems: [
        { item: "プロフィール設定", path: "/Mypage/profilesettings" },
        { item: "アカウント設定", path: "/Mypage/accountsettings" },
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
        { item: "プライバシーポリシー", path: "" },
        { item: "利用規約", path: "" },
        { item: "オープンソースライセンス", path: "" },
      ],
    },
  ];

  return (
    <Layout>
      <div>
        <span>
          <XIcon className="w-8 h-8" />
        </span>
        <h1 className="text-xl">アカウント</h1>
      </div>
      {menuContents.map((menuContents) => {
        return (
          <>
            <Content mypageContent={menuContents} />
          </>
        );
      })}
      <ul>
        <li>
          <Link href="/">お問い合わせ</Link>
        </li>
        <li>
          <span>バージョン</span>
          <span>1.0.0</span>
        </li>
      </ul>
      <ul>
        <Link href="/">
          <li>
            <span>
              <CogIcon className="w-4 h-4" />
            </span>
            <span>設定</span>
          </li>
        </Link>
        <li>
          <span>
            <LogoutIcon className="w-4 h-4" />
          </span>
          <span>ログアウト</span>
        </li>
      </ul>
    </Layout>
  );
};

export default Mypage;
