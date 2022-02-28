/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ChatIcon from "../../../assets/chat.svg";
import HeartIcon from "../../../assets/heart.svg";
import FileIcon from "../../../assets/file.svg";
import PinIcon from "../../../assets/pin.svg";
import PersonIcon from "../../../assets/boy.svg";
import SettingIcon from "../../../assets/setting.svg";

const SideMenuItem: React.FC = () => {
  const menuList = [
    {
      icon: <ChatIcon width="1.25rem" height="1.25rem" viewBox="0 0 350 350" />,
      name: "채팅",
      onClick: () => console.log("채팅"),
    },
    {
      icon: (
        <HeartIcon width="1.25rem" height="1.25rem" viewBox="0 0 350 350" />
      ),
      name: "찜 리스트",
      onClick: () => console.log("찜 리스트"),
    },
    {
      icon: <PinIcon width="1.25rem" height="1.25rem" viewBox="0 0 350 350" />,
      name: "최근 본 방",
      onClick: () => console.log("최근 본 방"),
    },
    {
      icon: <FileIcon width="1.25rem" height="1.25rem" viewBox="0 0 350 350" />,
      name: "MY 매물",
      onClick: () => console.log("MY 매물"),
    },
    {
      icon: (
        <PersonIcon
          width="1.25rem"
          height="1.25rem"
          viewBox="0 0 350 350"
          fill="#7000FF"
        />
      ),
      name: "고객센터",
      onClick: () => console.log("고객센터"),
    },
    {
      icon: (
        <SettingIcon width="1.25rem" height="1.25rem" viewBox="0 0 350 350" />
      ),
      name: "설정",
      onClick: () => console.log("설정"),
    },
  ];
  return (
    <div>
      {menuList.map(menu => (
        <div
          css={css`
            height: 2.5rem;
            display: flex;
            &:hover {
              cursor: pointer;
            }
          `}
          onClick={menu.onClick}
        >
          {menu.icon}
          <span
            css={css`
              font-size: 1rem;
              font-weight: 700;
              margin-left: 0.5rem;
            `}
          >
            {menu.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SideMenuItem;
