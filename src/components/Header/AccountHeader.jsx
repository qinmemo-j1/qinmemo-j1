import React from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon, XIcon } from "@heroicons/react/solid";

export const AccountHeader = (props) => {
  const { title, ...rest } = props;
  const router = useRouter();

  return (
    <>
      <div className="flex relative gap-x-6 justify-between items-center px-6 mx-auto max-w-5xl h-14">
        <button onClick={router.back}>
          {rest.isTopLevel ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <ChevronLeftIcon className="w-6 h-6" />
          )}
        </button>

        <h1 className="text-lg font-bold">{title}</h1>
        <span>&nbsp;</span>
      </div>
    </>
  );
};
