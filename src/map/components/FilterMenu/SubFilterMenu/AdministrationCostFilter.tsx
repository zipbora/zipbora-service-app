/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import styles from "./styled";

type Props = {};

const AdministrationCostFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={styles.wrapper}>
      <span css={styles.title}>관리비</span>
      <span css={styles.subTitle}>만원 단위</span>
      <div css={styles.buttonWrapper}>
        <Button css={styles.button({ selected: true })}>없음</Button>
        <Button css={styles.button({ selected: false })}>~10</Button>
        <Button css={styles.button({ selected: false })}>~20</Button>
        <Button css={styles.button({ selected: false })}>~30</Button>
      </div>
      <div css={styles.buttonWrapper}>
        <Button css={styles.button({ selected: false })}>~40</Button>
        <Button css={styles.button({ selected: false })}>~50</Button>
        <Button css={styles.button({ selected: false })}>~70</Button>
        <Button css={styles.button({ selected: false })}>~80 이상</Button>
      </div>
    </div>
  );
};

export default AdministrationCostFilter;
