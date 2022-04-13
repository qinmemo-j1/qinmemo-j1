import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

if (process.env.NODE_ENV === "development") {
  require("@/mocks/mock");
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
