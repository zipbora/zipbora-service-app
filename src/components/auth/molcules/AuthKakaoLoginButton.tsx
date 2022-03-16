/** @jsxImportSource @emotion/react */
import Button from "@mui/material/Button";
import { css } from "@emotion/react";

const styles = {
  button: css`
    width: 100%;
    color: #000000;
    background-color: #ffe600;
    &:hover {
      background-color: #f0d800;
    }
  `,
};

const AuthKakaoLoginButton = () => {
  const handleClickButton = () => {
    window.localStorage.setItem("kakao-previous-url", window.location.href);
    const CLIENT_ID = "be5556504bd874419f57f30ebed321c5";
    const REDIRECT_URI = "http://localhost:3000/login/callback/kakao";

    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    document.location.href = kakaoAuthUrl;
  };
  return (
    <>
      <Button
        onClick={handleClickButton}
        css={styles.button}
        variant="contained"
      >
        카카오톡 로그인 하기
      </Button>
    </>
  );
};

export default AuthKakaoLoginButton;
