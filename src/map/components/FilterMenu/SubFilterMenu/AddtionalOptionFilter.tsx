/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import styles from "./styled";

type Props = {};

const AddtionalOptionFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={styles.wrapper}>
      <span css={styles.title}>추가옵션</span>
      <span css={styles.subTitle}>중복선택 가능</span>
      <div css={styles.buttonWrapper}>
        <Button css={styles.button({ selected: true })}>주차가능</Button>
        <Button css={styles.button({ selected: false })}>승강기</Button>
        <Button css={styles.button({ selected: false })}>풀옵션</Button>
      </div>
      <div css={styles.buttonWrapper}>
        <Button css={styles.button({ selected: false })}>반려동물</Button>
        <Button css={styles.button({ selected: false })}>전세대출</Button>
        <Button css={styles.button({ selected: false })}>신축</Button>
      </div>
    </div>
  );
};

export default AddtionalOptionFilter;
