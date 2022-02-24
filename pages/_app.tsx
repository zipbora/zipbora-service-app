// import { NextPage, NextPageContext } from "next";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import GlobalCommonStyle from "@components/GlobalCommonStyle";
import useMobileDetect from "@hooks/useMobileDetect";
import { StoresProvider } from "@stores";
import CssBaseline from "@mui/material/CssBaseline";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const currentDevice = useMobileDetect();
  return (
    <>
      <StoresProvider>
        <CssBaseline />
        <Global styles={GlobalCommonStyle} />
        <Component {...pageProps} />
      </StoresProvider>
    </>
  );
};

export default MyApp;
