import Button from "@mui/material/Button";
import { css } from "@emotion/react";

const styles = {
  button: css`
    width: 100%;
    color: #000000;
    background-color: #ededed;
    &:hover {
      background-color: #d9d9d9;
    }
  `,
};

const AuthKakaoLoginButton = () => {
  return (
    <>
      <Button
        css={css`
          width: 100%;
          color: #000000;
          background-color: #ededed;
          &:hover {
            background-color: #d9d9d9;
          }
        `}
        variant="contained"
      >
        애플 로그인 하기
      </Button>
    </>
  );
};

export default AuthKakaoLoginButton;
