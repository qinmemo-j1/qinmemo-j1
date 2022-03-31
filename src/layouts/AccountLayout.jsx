import React from "react";
import { AccountHeader } from "src/components/Header/AccountHeader";

export const AccountLayout = (page, title, isTopLevel) => {
  return (
    <div>
      <header>
        <AccountHeader title={title} isTopLevel={isTopLevel} />
      </header>
      <main className="p-6 mx-auto max-w-5xl">{page}</main>
    </div>
  );
};
