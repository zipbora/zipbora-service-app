import ServiceLayout from "@components/service/templates/ServiceLayout";
import { NextPage } from "next";
import Head from "next/head";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>zipbora | 프로필</title>
      </Head>
      <ServiceLayout>
        <div>내 프로필</div>
      </ServiceLayout>
    </>
  );
};

export default Profile;
