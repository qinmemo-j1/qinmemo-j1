/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { VFC } from "react";

export const AccountModal: VFC = () => {
  return (
    <>
      <label
        htmlFor="my-modal-3"
        className="font-bold text-red-500 cursor-pointer"
      >
        アカウントの削除
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <label htmlFor="my-modal-3" className="cursor-pointer modal">
        <label className="relative w-80  modal-box" htmlFor="">
          <h3 className="flex justify-center text-lg font-bold">
            アカウントの削除
          </h3>
          <p className="py-4">アカウントを完全に削除してよろしいですか？</p>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="inline-flex justify-center py-3 px-2 w-32 text-sm font-bold text-black bg-slate-100 hover:bg-blue-200 rounded-full border border-transparent focus:outline-none focus-visible:none"
            >
              キャンセル
            </button>
            <button
              type="button"
              className="inline-flex justify-center py-3 px-4 w-32 text-sm font-bold text-white bg-red-500 hover:bg-blue-200 rounded-full border border-transparent focus:outline-none focus-visible:none"
            >
              OK
            </button>
          </div>
        </label>
      </label>
    </>
  );
};
