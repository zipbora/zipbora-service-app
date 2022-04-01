/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import * as S from "./styled";

type Props = {};

const AreaFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={S.styles.wrapper}>
      <span css={S.styles.title}>면적</span>
      <div css={S.styles.buttonWrapper}>
        <Button css={S.styles.button({ selected: true })}>~10평</Button>
        <Button css={S.styles.button({ selected: false })}>10평대</Button>
        <Button css={S.styles.button({ selected: false })}>20평대</Button>
        <Button css={S.styles.button({ selected: false })}>30평대</Button>
      </div>
      <div css={S.styles.buttonWrapper}>
        <Button css={S.styles.button({ selected: false })}>40평대</Button>
        <Button css={S.styles.button({ selected: false })}>50평대</Button>
        <Button css={S.styles.button({ selected: false })}>60평대</Button>
        <Button css={S.styles.button({ selected: false })}>70평대~</Button>
      </div>
    </div>
  );
};

export default AreaFilter;
