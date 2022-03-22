<<<<<<< HEAD
import ServiceLayout from "@components/map/templates/ServiceLayout";
=======
import ServiceLayout from "@map/components/templates/ServiceLayout";
>>>>>>> 0a9e405d6dad1677c9ab49872b0de787b1a03a05
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
