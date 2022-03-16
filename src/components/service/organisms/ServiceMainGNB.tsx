/** @jsxImportSource @emotion/react */
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { css } from "@emotion/react";
import { MainLogo } from "../../../assets/Icons";
import SiderBar from "./ServiceSiderBar";
import FilterMenu from "../molcules/FilterMenu";
import ZipboraMainLogo from "../../../assets/zipbora_main_logo.svg";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

const ServiceMainGNB: React.FC = () => {
  const styles = {
    appbarStyle: css`
      background-color: #ffffff;
      height: 3.25rem;
      .MuiToolbar-gutters {
        min-height: 3.25rem;
        border-bottom: 1px solid rgba(109, 106, 244, 0.2);
      }
    `,
  };

  return (
    <>
      <AppBar position="static" css={styles.appbarStyle}>
        <Toolbar
          css={css`
            position: relative;
            padding: 0;
          `}
        >
          <div>
            <ZipboraMainLogo
              width="7rem"
              height="2.5rem"
              viewBox="150 -80 300 300"
            />
          </div>

          <div
            css={css`
              position: absolute;
              right: 0;
              display: flex;
              margin-right: 1rem;
            `}
          >
            <SearchIcon
              css={css`
                width: 2rem;
                color: black;
              `}
            />
            <SiderBar />
          </div>
        </Toolbar>
        <FilterMenu />
      </AppBar>
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

export default ServiceMainGNB;
