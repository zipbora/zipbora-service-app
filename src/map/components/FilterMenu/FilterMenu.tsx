/**
 *  @jsxImportSource @emotion/react
 */
import React, { useState, useCallback, useRef } from "react";
import Chip from "@mui/material/Chip";
import { css } from "@emotion/react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { throttle } from "lodash";
import SubFilterMenu from "./SubFilterMenu/SubFilterMenu";
import styles from "./styled";

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
  const handleClick = type => {
    console.info("You clicked the Chip.", type);
    if (type === selectedChip) setSelectedChip("");
    else setSelectedChip(type);
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

  return (
    <div css={styles.filterWrapper}>
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
              css={styles.chip({
                selected: selectedChip === "transactionTypeFilter",
              })}
              variant="outlined"
              onClick={() => handleClick("transactionTypeFilter")}
            />
            <Chip
              label="가격"
              css={styles.chip({
                selected: selectedChip === "priceFilter",
              })}
              variant="outlined"
              onClick={() => handleClick("priceFilter")}
            />
            <Chip
              label="건물형태"
              css={styles.chip({
                selected: selectedChip === "buildingTypeFilter",
              })}
              variant="outlined"
              onClick={() => handleClick("buildingTypeFilter")}
            />
            <Chip
              label="면적"
              css={styles.chip({
                selected: selectedChip === "areaFilter",
              })}
              variant="outlined"
              onClick={() => handleClick("areaFilter")}
            />
            <Chip
              label="관리비"
              css={styles.chip({
                selected: selectedChip === "administrationCostFilter",
              })}
              variant="outlined"
              onClick={() => handleClick("administrationCostFilter")}
            />
            <Chip
              label="층수"
              css={styles.chip({
                selected: selectedChip === "numOfFloorsFilter",
              })}
              variant="outlined"
              onClick={() => handleClick("numOfFloorsFilter")}
            />
            <Chip
              label="방개수"
              css={styles.chip({
                selected: selectedChip === "numOfRoomsFilter",
              })}
              variant="outlined"
              onClick={() => handleClick("numOfRoomsFilter")}
            />
            <Chip
              label="추가옵션"
              css={styles.chip({
                selected: selectedChip === "addtionalOptionFilter",
              })}
              variant="outlined"
              onClick={() => handleClick("addtionalOptionFilter")}
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
      <SubFilterMenu type={selectedChip} />
      {isExpanded && (
        <div
          css={css`
            width: 100%;
            height: 2rem;
            color: #8d8d8d;
            font-size: 0.813rem;
            display: flex;
            align-items: center;
            border-top: 1px solid #ededed;
          `}
        >
          <div
            css={css`
              margin-left: 16px;
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
