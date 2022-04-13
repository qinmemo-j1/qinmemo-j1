import React from "react";
import { MyPageHeader } from "src/components/MyPageHeader";

export const Theme = () => {
  return (
    <>
      <MyPageHeader name="テーマ" />
      <div className="relative px-4">
        <div className="flex flex-col gap-6 py-4 mx-auto max-w-2xl font-bold">
          <span>端末の設定に合わせる</span>

          <span>ライト</span>

          <span>グレー</span>
        </div>
      </div>
    </>
  );
};

export default Theme;
