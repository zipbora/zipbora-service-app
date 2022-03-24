import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";

type DrawerTypeProps = {
  isExpanded: boolean;
};

const styles = {
  wrapper: css`
    color: #666666;
    background: #ededed;
    width: 100%;
    padding: 12px 16px;
  `,
  title: css`
    font-size: 12px;
    font-weight: bold;
  `,
  subTitle: css`
    font-size: 11px;
    color: #a8a8a8;
    margin-left: 6px;
  `,
  buttonWrapper: css`
    display: flex;
    gap: 6px;
    margin-top: 8px;
  `,
  button: ({ selected }: { selected: boolean }) => css`
    flex: 1;
    height: 35px;
    border: 1px solid #a8a8a8;
    color: #333333;
    background: white;

    ${selected === true &&
    `
      border: 1px solid #6d6af4;
      color: #ffffff;
      background: #6d6af4;
      `}
    &:hover {
      border: 1px solid #6d6af4;
      color: #ffffff;
      background: #6d6af4;
    }
  `,
  slider: css`
    color: #bbbbbb;
    .MuiSlider-track {
      opacity: 0.5,
      color: color:green,
    }

  `,
  chip: ({ selected }: { selected: boolean }) => css`
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
};

export default styles;
