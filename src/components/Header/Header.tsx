import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";

import logo from "public/logo.svg";
import { UserMenu } from "./UserMenu";

export const Header: VFC = () => {
  return (
    <header className="flex justify-center items-center px-6 mx-auto max-w-screen-lg h-20 sm:px-4 md:justify-between">
      <Link href="/">
        <a>
          <Image src={logo} alt="Qin Todo" height={24} width={113}></Image>
        </a>
      </Link>
      <div className="w-[36px] h-[36px] rounded-full">
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
