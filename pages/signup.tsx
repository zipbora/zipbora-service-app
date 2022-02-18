import KakaoSignUpLayout from "@components/auth/templates/AuthSignUpLayout";
import ServiceLayout from "@components/service/templates/ServiceLayout";
import Head from "next/head";
import type { NextPage } from "next";

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>zipbora | 회원 가입</title>
      </Head>
      <ServiceLayout>
        <KakaoSignUpLayout />
      </ServiceLayout>
    </>
  );
};

export default SignUp;
