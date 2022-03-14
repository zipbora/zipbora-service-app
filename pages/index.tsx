import type { NextPage } from "next";
import ServiceLayout from "@components/service/templates/ServiceLayout";
import ServiceMapLayout from "@components/service/templates/ServiceMapLayout";
import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zipbora</title>
      </Head>
      <ServiceLayout>
        <ServiceMapLayout />
      </ServiceLayout>
    </>
  );
};

export default Home;
