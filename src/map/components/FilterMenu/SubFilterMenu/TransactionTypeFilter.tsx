/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import styles from "./styled";

type Props = {};

const TransactionTypeFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={styles.wrapper}>
      <span css={styles.title}>거래유형</span>
      <span css={styles.subTitle}>중복선택 가능</span>
      <div css={styles.buttonWrapper}>
        <Button css={styles.button({ selected: true })}>매매</Button>
        <Button css={styles.button({ selected: false })}>전세</Button>
        <Button css={styles.button({ selected: true })}>월세</Button>
      </div>
    </div>
  );
};

export default TransactionTypeFilter;
