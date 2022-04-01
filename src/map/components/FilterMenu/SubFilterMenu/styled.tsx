import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";
import { Slider } from "@mui/material";

type DrawerTypeProps = {
  isExpanded: boolean;
};

export const StyledSlider = styled(Slider)`
  color: #6D6AF4;
  height: 4px;
  .MuiSlider-track {
    border: none;
  };
  .MuiSlider-markLabel {
    font-size: 12px;
  }
  .MuiSlider-mark {
    display: none;
  };
  .MuiSlider-thumb {
    height: 16px;
    width: 16px;
    background-color: #6D6AF4;
    border: 2px solid currentColor,
    :focus, :hover, .Mui-active, .Mui-focusVisible: {
      box-shadow: inherit;
    };
    :before: {
      display: none;
    };
  };
  .MuiSlider-valueLabel {
    lineHeight: 1.2px;
    font-size: 10px;
    background: unset;
    padding: 0;
    width: 32px;
    height: 32px;
    border-radius: 50% 50% 50% 0;
    background-color: #6D6AF4;
    transform-origin: bottom left;
    transform: translate(50%, -100%) rotate(-45deg) scale(0);
    :before: { display: none };
    .MuiSlider-valueLabelOpen: {
      transform: translate(50%, -100%) rotate(-45deg) scale(1);ß
    },
    & > *: {
      transform: rotate(45deg);
    },
  },
`;

export const styles = {
  wrapper: css`
    color: #666666;
    background: #ededed;
    width: 100%;
    padding: 12px 24px;
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
