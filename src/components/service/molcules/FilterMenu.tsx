/**
 *  @jsxImportSource @emotion/react
 */
import React, { useState, useCallback, useRef } from "react";
import Chip from "@mui/material/Chip";
import { css } from "@emotion/react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { throttle } from "lodash";

const FilterMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedChip, setSelectedChip] = useState("");
  const chipWrapperRef = useRef<any>(null);
  const chipScrollStartRef = useRef<any>(null);
  const chipScrollEndRef = useRef<any>(null);

  const toggleExpand = useCallback(() => {
    if (isExpanded) {
      chipScrollStartRef.current.style.display = "none";
      chipScrollEndRef.current.style.display = "inline";
    } else {
      chipScrollStartRef.current.style.display = "none";
      chipScrollEndRef.current.style.display = "none";
    }
    setIsExpanded(!isExpanded);
  }, [isExpanded]);
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const handleScroll = throttle(() => {
    if (!chipWrapperRef?.current) return;
    const { offsetWidth, scrollLeft, scrollWidth } = chipWrapperRef.current;

    if (offsetWidth + scrollLeft >= scrollWidth) {
      console.log("end");
      chipScrollEndRef.current.style.display = "none";
    } else if (scrollLeft === 0) {
      console.log("start");
      chipScrollStartRef.current.style.display = "none";
    } else {
      chipScrollStartRef.current.style.display = "inline";
      chipScrollEndRef.current.style.display = "inline";
    }
  }, 200);
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("radio checked", e.target.value);
  // };

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
    chip: css`
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

  const getSubFilter = {
    // info: <Info  />,
    // warning: <Warning />,
    // error: <Error />,
  };

  return (
    <div css={styles.wrapper}>
      <div css={styles.filterWrapper}>
        <div css={styles.chipTotalWrapper({ isExpanded })}>
          <div className="gradient-left" ref={chipScrollStartRef} />
          <div
            css={styles.chipListWrapper({ isExpanded })}
            onScroll={handleScroll}
            ref={chipWrapperRef}
          >
            <Chip
              label="거래유형"
              css={styles.chip}
              variant="outlined"
              onClick={handleClick}
            />
            <Chip
              label="가격"
              css={styles.chip}
              variant="outlined"
              onClick={handleClick}
            />
            <Chip
              label="건물형태"
              css={styles.chip}
              variant="outlined"
              onClick={handleClick}
            />
            <Chip
              label="면적"
              css={styles.chip}
              variant="outlined"
              onClick={handleClick}
            />
            <Chip
              label="관리비"
              css={styles.chip}
              variant="outlined"
              onClick={handleClick}
            />
            <Chip
              label="층수"
              css={styles.chip}
              variant="outlined"
              onClick={handleClick}
            />
            <Chip
              label="방개수"
              css={styles.chip}
              variant="outlined"
              onClick={handleClick}
            />
            <Chip
              label="추가옵션"
              css={styles.chip}
              variant="outlined"
              onClick={handleClick}
            />
          </div>
          <div className="gradient-right" ref={chipScrollEndRef} />
        </div>
        <div css={styles.expandBtn({ isExpanded })}>
          {isExpanded ? (
            <ExpandLessIcon onClick={toggleExpand} />
          ) : (
            <ExpandMoreIcon onClick={toggleExpand} />
          )}
        </div>
      </div>
      {/* <div css={styles.subFilterWrapper}>{getSubFilter[selectedChip]}</div> */}
      {isExpanded && (
        <div
          css={css`
            width: 100%;
            height: 2rem;
            color: #8d8d8d;
            background: #f6f6f6;
            font-size: 0.813rem;
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              margin-left: 0.813rem;
            `}
          >
            초기화
          </div>
          <div
            onClick={toggleExpand}
            css={css`
              position: absolute;
              right: 0;
              margin-right: 0.5rem;
              cursor: pointer;
              display: flex;
              align-items: center;
            `}
          >
            <span>접기</span>
            <ExpandLessIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
