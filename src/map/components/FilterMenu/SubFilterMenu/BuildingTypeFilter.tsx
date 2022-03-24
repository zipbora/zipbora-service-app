/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import styles from "./styled";

type Props = {};

const BuildingTypeFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={styles.wrapper}>
      <span css={styles.title}>건물형태</span>
      <span css={styles.subTitle}>중복선택 가능</span>
      <div css={styles.buttonWrapper}>
        <Button css={styles.button({ selected: true })}>아파트</Button>
        <Button css={styles.button({ selected: false })}>빌라/주택</Button>
        <Button css={styles.button({ selected: true })}>오피스텔</Button>
      </div>
    </div>
  );
};

export default BuildingTypeFilter;
