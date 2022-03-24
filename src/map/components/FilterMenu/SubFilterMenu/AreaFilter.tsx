/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import styles from "./styled";

type Props = {};

const AreaFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={styles.wrapper}>
      <span css={styles.title}>면적</span>
      <div css={styles.buttonWrapper}>
        <Button css={styles.button({ selected: true })}>~10평</Button>
        <Button css={styles.button({ selected: false })}>10평대</Button>
        <Button css={styles.button({ selected: false })}>20평대</Button>
        <Button css={styles.button({ selected: false })}>30평대</Button>
      </div>
      <div css={styles.buttonWrapper}>
        <Button css={styles.button({ selected: false })}>40평대</Button>
        <Button css={styles.button({ selected: false })}>50평대</Button>
        <Button css={styles.button({ selected: false })}>60평대</Button>
        <Button css={styles.button({ selected: false })}>70평대~</Button>
      </div>
    </div>
  );
};

export default AreaFilter;
