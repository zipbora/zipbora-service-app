import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";

type DrawerTypeProps = {
  isExpanded: boolean;
};

const styles = {
  wrapper: css`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    background: white;
  `,
  filterWrapper: css`
    position: relative;
    z-index: 2;
    background-color: white;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `,
  chip: ({ selected }) => css`
    height: 1.75rem;
    color: #555555;
    background: #ededed;
    border: 1px solid #ededed;
    border-radius: 6px;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
    &.MuiChip-clickable:hover {
      background-color: #6d6af4;
    }
    &:hover {
      border: 1px solid #6d6af4;
      color: #ffffff;
      background: #6d6af4;
    }
    ${selected === true &&
    `
      border: 1px solid #6d6af4;
      color: #ffffff;
      background: #6d6af4;
      `}
  `,
  chipTotalWrapper: (props: DrawerTypeProps) => css`
    width: ${props.isExpanded ? "100%" : "calc(100% - 3rem)"};
    position: relative;
    background-color: white;
    .gradient-left,
    .gradient-right {
      position: absolute;
      background-color: black;
      width: 3rem;
      height: 2.5rem;
      z-index: 2;
    }
    .gradient-left {
      display: none;
      background: linear-gradient(
        90deg,
        #ffffff 20%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    .gradient-right {
      right: 0;
      top: 0;
      background: linear-gradient(
        270deg,
        #ffffff 20%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  `,
  chipListWrapper: (props: DrawerTypeProps) => css`
    display: flex;
    overflow: auto;
    align-items: center;
    position: relative;
    margin: 0.5rem 0 0.25rem 1rem;
    ${props.isExpanded === true &&
    `
        flex-direction: row;
        flex-wrap: wrap;
      `}
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `,
  expandBtn: (props: DrawerTypeProps) => css`
    width: 2.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    color: black;
    margin: 0.5rem 0.25rem;
    border-left: 1px solid #dcdcdc;
    ${props.isExpanded === true &&
    `
        display: none;
      `}
  `,
  subFilterWrapper: css`
    background: #ededed;
    color: #333333;
  `,
};

export default styles;
