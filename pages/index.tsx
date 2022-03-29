import type { NextPage } from "next";
import { useEffect } from "react";

const KakaoLoginCallback: NextPage = () => {
  useEffect(() => {
    // get previous url from local storage
    window.location.href = "/mobile/map";
  }, []);

  return (
    <>
      <div />
    </>
  );
};

export default KakaoLoginCallback;
