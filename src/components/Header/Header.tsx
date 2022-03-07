import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { VFC } from "react";

import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";
import { QinAccountLogo } from "./QinAccountLogo";

export const Header: VFC = () => {
  const router = useRouter();

  return (
    <header className="flex justify-center items-center px-6 mx-auto max-w-screen-lg h-20 sm:px-4 md:justify-between">
      {router.pathname === "/mypage/account" ? (
        <QinAccountLogo />
      ) : (
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      )}

      <Link href="/mypage">
        <a>
          <div className="w-[36px] h-[36px] rounded-full">
            <UserMenu />
          </div>
        </a>
      </Link>
    </header>
  );
};

export default Header;
