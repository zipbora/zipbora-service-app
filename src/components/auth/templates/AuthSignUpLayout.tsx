import { useState } from "react";

interface Data {
  data: any;
}

const KakaoSignUpLayout: React.FC = () => {
  const [data, setData] = useState<Data>();

  const responseKaKao = (res: any) => {
    setData({
      data: res,
    });
    alert(JSON.stringify(data));
  };

  const responseFail = (err: any) => {
    alert(err);
  };

  return (
    <>
      <h1>SNS 로그인</h1>
      <br />$
      {/* <KakaoSignUpButton
        token="0bc49585a7075990aec9f91ee3ba96ff"
        onSuccess={responseKaKao}
        onFail={responseFail}
      /> */}
    </>
  );
};

export default KakaoSignUpLayout;
