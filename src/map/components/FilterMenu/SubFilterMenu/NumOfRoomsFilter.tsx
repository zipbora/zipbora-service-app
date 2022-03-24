/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import styles from "./styled";

type Props = {};

const NumOfRoomsFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={styles.wrapper}>
      <span css={styles.title}>방개수</span>
      <span css={styles.subTitle}>중복선택 가능</span>
      <div css={styles.buttonWrapper}>
        <Button css={styles.button({ selected: true })}>원룸</Button>
        <Button css={styles.button({ selected: false })}>투룸</Button>
        <Button css={styles.button({ selected: false })}>쓰리룸 이상</Button>
      </div>
    </div>
  );
};

export default NumOfRoomsFilter;
