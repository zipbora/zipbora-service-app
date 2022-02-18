import ServiceGNB from "@components/service/organisms/ServiceGNB";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import { useEffect, useRef, useState } from "react";

const ServiceLayout: React.FC = observer(({ children }) => {
  const { serviceDomainStore } = useStores();

  const handleTestStore: React.EventHandler = async e => {
    serviceDomainStore.increase();
  };

  return (
    <div>
      <button type="button" onClick={handleTestStore}>
        {serviceDomainStore.number}
      </button>
      <ServiceGNB />
      {children}
    </div>
  );
});

export default ServiceLayout;
