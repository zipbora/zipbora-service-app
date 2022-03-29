// import { NextPage, NextPageContext } from "next";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import GlobalCommonStyle from "@common/GlobalCommonStyle";
import useMobileDetect from "@common/hooks/useMobileDetect";
import { MapStoresProvider } from "@map/modules/stores";
import { AuthStoresProvider } from "@auth/modules/stores";
import CssBaseline from "@mui/material/CssBaseline";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const currentDevice = useMobileDetect();
  return (
    <>
      <AuthStoresProvider>
        <MapStoresProvider>
          <CssBaseline />
          <Global styles={GlobalCommonStyle} />
          <Component {...pageProps} />
        </MapStoresProvider>
      </AuthStoresProvider>
    </>
  );
};

export default MyApp;
