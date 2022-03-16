import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Layout } from "@/layouts";

const Profile: NextPage = () => {
  return (
    <Layout>
      <div className="justify-center">
        <h1 className="font-bold text-center">プロフィール</h1>
        <div className="mx-auto w-auto max-w-lg">
          <div className="py-6 m-auto">
            <div className="text-gray-500">アイコン</div>
            <div className="flex items-center">
              <Image src="/avatar.jpg" alt="" width={100} height={100} />
              <div className="relative m-5 max-h-full align-middle">
                <button className="w-24 max-h-full text-white align-middle bg-blue-400 hover:bg-blue-500 rounded-full">
                  変更する
                </button>
              </div>
            </div>
          </div>
          <div>
            <span className="text-gray-500">名前</span>
          </div>
          <div>
            <input
              className="content-center py-2 my-2 w-96 max-w-full bg-gray-100 rounded-full"
              placeholder="名前を入力してください"
            />
          </div>
          <button className="py-1 px-2 my-6 w-96 font-semibold text-white bg-blue-400 hover:bg-blue-500 rounded-full">
            保存する
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
