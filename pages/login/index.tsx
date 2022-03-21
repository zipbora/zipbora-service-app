import type { NextPage } from "next";
import AuthLogin from "@auth/components/organisms/AuthLogin";
import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Login: NextPage = () => {
  return (
    <>
      <AuthLogin />
    </>
  );
};

export default Login;
