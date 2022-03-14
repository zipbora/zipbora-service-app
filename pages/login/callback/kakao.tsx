import type { NextPage } from "next";
import { useEffect } from "react";

const KakaoLoginCallback: NextPage = () => {
  useEffect(() => {
    const previousUrl: string = window.localStorage.getItem(
      "kakao-previous-url",
    ) as string;
    // send code to server

    // redirect to previousUrl
    window.location.href = previousUrl;
  }, []);

  return (
    <>
      <div />
    </>
  );
};

export default KakaoLoginCallback;
