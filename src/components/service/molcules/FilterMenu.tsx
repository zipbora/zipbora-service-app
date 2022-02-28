/**
 *  @jsxImportSource @emotion/react
 */
import React, { useState, useCallback, useRef } from "react";
import Chip from "@mui/material/Chip";
import { css } from "@emotion/react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const chipWrapperRef = useRef(null);

  const toggleExpand = useCallback(() => {
    setIsExpanded(!isExpanded);
    console.log(chipWrapperRef.current);
  }, [isExpanded]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("radio checked", e.target.value);
  };
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const styles = {
    wrapper: css`
      width: 100%;
      display: flex;
      height: 2.75rem;
    `,
    filterWrapper: css`
      position: absolute;
      z-index: 2;
      background-color: white;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    `,
    chip: css`
      height: 1.75rem;
      color: #555555;
      border: 1px solid #cccccc;
      border-radius: 6px;
      margin-right: 0.25rem;
    `,
    chipListWrapper: ({ isExpanded }) => css`
      width: ${isExpanded ? "100%" : "calc(100% - 4.5rem)"};
      display: flex;
      overflow: auto;
      align-items: center;
      margin: 0.5rem 0 0.5rem 1rem;
      ${isExpanded === false &&
      `
        height: 1.75rem;
      `}
      ${isExpanded === true &&
      `
        flex-direction: row;
        flex-wrap: wrap;
      `}
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
      .gradient-right {
        background: black;
        width: 1rem;
      }
    `,
    expandBtn: ({ isExpanded }) => css`
      width: 2.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
      color: black;
      margin: 0.5rem;
      border-left: 1px solid #dcdcdc;
      padding-left: 0.5rem;
      ${isExpanded === true &&
      `
        display: none;
      `}
    `,
  };

  return (
    <div css={styles.wrapper}>
      <div css={styles.filterWrapper}>
        <div css={styles.chipListWrapper({ isExpanded })} ref={chipWrapperRef}>
          <Chip
            label="매매"
            css={styles.chip}
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="유형"
            css={styles.chip}
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="평형"
            css={styles.chip}
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            css={styles.chip}
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="Clickable"
            css={styles.chip}
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="세대수"
            css={styles.chip}
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="입주년차"
            css={styles.chip}
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            label="용적률"
            css={styles.chip}
            variant="outlined"
            onClick={handleClick}
          />
          <div className="gradient-right" />
        </div>
        <div css={styles.expandBtn({ isExpanded })}>
          {isExpanded ? (
            <ExpandLessIcon onClick={toggleExpand} />
          ) : (
            <ExpandMoreIcon onClick={toggleExpand} />
          )}
        </div>
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
    </div>
  );
};

export default FilterMenu;
