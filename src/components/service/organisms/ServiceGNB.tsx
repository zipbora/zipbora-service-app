/** @jsxImportSource @emotion/react */
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

import { MainLogo } from "../../../assets/Icons";
import SiderBar from "./ServiceSiderBar";
import FilterMenu from "../molcules/FilterMenu";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

const ServiceGNB: React.FC = () => {
  return (
    <>
      <AppBar position="static" css={{ backgroundColor: "#5C9BFC" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            css={{
              flexGrow: 1,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              aligIitems: "center",
            }}
          >
            <MainLogo />
          </Typography>
          <SearchIcon />
          <SiderBar />
        </Toolbar>
      </AppBar>
      <FilterMenu />
      {/* <Menu
        mode="horizontal"
        style={{ background: ThemeStore.theme.mainColor }}
      >
        <Menu.Item>
          <Link href="/">
            <a>집보라</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <ServiceMenuItem />
      </Menu> */}
    </>
  );
};

export default ServiceGNB;
