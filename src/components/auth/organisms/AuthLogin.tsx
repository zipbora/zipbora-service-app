import { useState } from "react";
import AuthKakaoLoginButton from "../molcules/AuthKakaoLoginButton";
import AuthAppleLoginButton from "../molcules/AuthAppleLoginButton";

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
      <div>
        <div>
          <AuthKakaoLoginButton />
        </div>
        <div>
          <AuthAppleLoginButton />
        </div>
      </div>
    </>
  );
};

export default KakaoSignUpLayout;
