import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";

import logo from "public/logo.svg";
import { UserMenu } from "./UserMenu";
import { useRouter } from "next/router";

export const Header: VFC = () => {
  const PATH_ACCOUNT_ACCOUNTSETTINGS = "/account/accountsettings";
  const router = useRouter();

  return (
    <header className="flex justify-center items-center px-6 mx-auto max-w-screen-lg h-20 sm:px-4 md:justify-between">
      {router.pathname === PATH_ACCOUNT_ACCOUNTSETTINGS ? (
        <Image src="/logo_account.png" alt="logo" width={173} height={24} />
      ) : (
        <Link href="/">
          <a>
            <Image src={logo} alt="Qin Todo" height={24} width={113} />
          </a>
        </Link>
      )}

      <div className="w-[36px] h-[36px] rounded-full">
        <Link href="/mypage">
          <a className="width={36} height={36}">
            <UserMenu />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
