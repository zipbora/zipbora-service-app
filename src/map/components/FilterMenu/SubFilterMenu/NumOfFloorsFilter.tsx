/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import * as S from "./styled";

type Props = {};

const NumOfFloorsFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={S.styles.wrapper}>
      <span css={S.styles.title}>층수</span>
      <span css={S.styles.subTitle}>중복선택 가능</span>
      <div css={S.styles.buttonWrapper}>
        <Button css={S.styles.button({ selected: true })}>1층~5층</Button>
        <Button css={S.styles.button({ selected: false })}>6층 이상</Button>
      </div>
      <div css={S.styles.buttonWrapper}>
        <Button css={S.styles.button({ selected: false })}>옥탑</Button>
        <Button css={S.styles.button({ selected: false })}>지하</Button>
        <Button css={S.styles.button({ selected: false })}>반지하</Button>
      </div>
    </div>
  );
};

export default NumOfFloorsFilter;
