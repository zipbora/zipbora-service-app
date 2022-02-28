import ServiceMainGNB from "@components/service/organisms/ServiceMainGNB";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import { useEffect, useRef, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({}) => ({
  backgroundColor: "#ffffff",
}));

const Puller = styled(Box)(({}) => ({
  width: 30,
  height: "100%",
  backgroundColor: "#808080",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50%-15px)",
}));

const ServiceLayout: React.FC = observer(({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // const { serviceDomainStore } = useStores();

  // const handleTestStore: React.EventHandler = async e => {
  //   serviceDomainStore.increase();
  // };
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerVisible(open);
    };
  return (
    <div>
      <ServiceMainGNB />
      {children}
      <SwipeableDrawer
        variant="temporary"
        anchor="bottom"
        open={drawerVisible}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Puller />
        swep
        <StyledBox>asdf</StyledBox>
      </SwipeableDrawer>
    </div>
  );
});

export default ServiceLayout;
