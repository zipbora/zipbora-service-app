// import { NextPage, NextPageContext } from "next";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import GlobalCommonStyle from "@components/GlobalCommonStyle";
import useMobileDetect from "@hooks/useMobileDetect";
import { StoresProvider } from "@stores";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const currentDevice = useMobileDetect();
  console.log("isMobile: ", currentDevice.isMobile());
  return (
    <StoresProvider>
      <Global styles={GlobalCommonStyle} />
      <Component {...pageProps} />
    </StoresProvider>
  );
};

export default MyApp;
