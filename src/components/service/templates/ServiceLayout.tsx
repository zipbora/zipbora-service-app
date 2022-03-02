import ServiceGNB from "@components/service/organisms/ServiceGNB";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import { useEffect, useRef, useState } from "react";

const ServiceLayout: React.FC = observer(({ children }) => {
  // const { serviceStore } = useStores();

  // const handleTestStore: React.EventHandler = async e => {
  //   serviceStore.increase();
  // };

  return (
    <div>
      <ServiceGNB />
      {children}
    </div>
  );
});

export default ServiceLayout;
