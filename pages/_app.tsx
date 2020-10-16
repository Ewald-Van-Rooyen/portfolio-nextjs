import {AppProps} from "next/app";
import React from "react";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
