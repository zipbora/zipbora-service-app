/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SideMenuItem from "./SideMenuItem";

const SideMenuList: React.FC = () => {
  return (
    <div
      css={css`
        margin: 1.25rem;
      `}
    >
      <SideMenuItem />
    </div>
  );
};

export default SideMenuList;
