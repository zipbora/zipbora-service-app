/**
 * @jsxImportSource @emotion/react
 * */

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
  return (
    <>
      <Button css={styles.button} variant="contained">
        카카오톡 로그인 하기
      </Button>
    </>
  );
};

export default AuthKakaoLoginButton;
