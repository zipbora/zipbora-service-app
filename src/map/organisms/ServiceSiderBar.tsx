/** @jsxImportSource @emotion/react */
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { jsx, css } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import SideMenuList from "../components/molcules/SideMenuList";
import UserProfile from "../components/molcules/UserProfile";

interface Props {
  onClose?: VoidFunction;
  visible?: boolean;
}

const SiderBar: React.FC<Props> = ({ onClose, visible }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const styles = {
    drawer: css`
      .MuiPaper-elevation {
        border-radius: 3.125rem 0 0;
        width: 18.563rem;
        padding: 0 0.5rem;
      }
    `,
    drawerHeader: css`
      !display: flex;
    `,
    closeIcon: css`
      color: #6d6af4;
      margin-left: auto;
    `,
  };

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
    <>
      <MenuIcon
        onClick={toggleDrawer(true)}
        css={css`
          width: 2rem;
          color: black;
        `}
      />
      <SwipeableDrawer
        anchor="right"
        open={drawerVisible}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        css={styles.drawer}
        hideBackdrop
      >
        <div style={{ display: "flex", margin: "1rem" }}>
          <CloseIcon css={styles.closeIcon} onClick={toggleDrawer(false)} />
        </div>
        <UserProfile />
        <Divider />
        <SideMenuList />
      </SwipeableDrawer>
    </>
  );
};

export default SiderBar;
