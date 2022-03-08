import React from "react";
import type { VFC, ReactNode } from "react";

import Header from "src/components/Header/Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
