import type { NextPage } from "next";

const KakaoLoginCallback: NextPage = () => {
  const previousUrl = window.localStorage.getItem("kakao-previous-url");

  // send code to server

  // redirect to previousUrl

  return (
    <>
      <div />
    </>
  );
};

export default KakaoLoginCallback;
