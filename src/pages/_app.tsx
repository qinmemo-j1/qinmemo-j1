import React from "react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";

import "../styles/globals.css";

if (process.env.NODE_ENV === "development") {
  require("@/mocks/mock");
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
