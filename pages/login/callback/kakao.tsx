import type { NextPage } from "next";
import { useEffect } from "react";

const KakaoLoginCallback: NextPage = () => {
  useEffect(() => {
    // get previous url from local storage
    const previousUrl: string = window.localStorage.getItem(
      "kakao-previous-url",
    ) as string;
    // send code to server and wait for the cookie
    // then set token in cokkie
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
