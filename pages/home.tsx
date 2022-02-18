import ServiceLayout from "@components/service/templates/ServiceLayout";
import MapView from "@components/service/templates/MapLayout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>zipbora | 프로필</title>
        <script
          type="text/javascript"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=u27hpbj3bf"
        />
      </Head>
      <ServiceLayout>
        <MapView />
      </ServiceLayout>
    </>
  );
};

export default Home;
