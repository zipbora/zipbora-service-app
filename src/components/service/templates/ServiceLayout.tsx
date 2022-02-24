import ServiceGNB from "@components/service/organisms/ServiceGNB";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import { useEffect, useRef, useState } from "react";

const ServiceLayout: React.FC = observer(({ children }) => {
  // const { serviceDomainStore } = useStores();

  // const handleTestStore: React.EventHandler = async e => {
  //   serviceDomainStore.increase();
  // };

  return (
    <div>
<<<<<<< HEAD
=======
      {/* <button type="button" onClick={handleTestStore}>
        {serviceDomainStore.number}
      </button> */}
>>>>>>> bd346f9972f7bbc00efdc940d4286eb423417baa
      <ServiceGNB />
      {children}
    </div>
  );
});

export default ServiceLayout;
