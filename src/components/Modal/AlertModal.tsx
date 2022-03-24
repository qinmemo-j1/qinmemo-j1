import React from "react";
import { Dispatch, Fragment, SetStateAction, VFC } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  title: string;
  message: string;
  onClick: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const AlertModal: VFC<Props> = (props) => {
  const { isOpen, onClick, title, message, setIsOpen } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="overflow-y-auto fixed inset-0 z-10 bg-gray-500/75 transition-opacity"
        onClose={() => setIsOpen(false)}
      >
        <div className="px-4 min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block overflow-hidden p-6 my-8 w-full max-w-md text-left align-middle bg-white rounded-2xl shadow-xl transition-all">
              <Dialog.Title as="h3" className="text-2xl font-bold text-center">
                {title}
              </Dialog.Title>
              <div className="mt-2">
                <p className="py-4 text-sm text-center">{message}</p>
              </div>

              <div className="mt-4">
                <div className="flex gap-4 justify-center">
                  <button
                    className="z-10 py-3 px-8 text-black bg-slate-100 rounded-full border-none hover:opacity-70"
                    onClick={() => setIsOpen(false)}
                  >
                    キャンセル
                  </button>
                  <button
                    className="z-10 py-3 px-12 text-white bg-red-500 rounded-full  hover:opacity-70"
                    onClick={onClick}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
