/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import * as S from "./styled";

type Props = {};

const BuildingTypeFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={S.styles.wrapper}>
      <span css={S.styles.title}>건물형태</span>
      <span css={S.styles.subTitle}>중복선택 가능</span>
      <div css={S.styles.buttonWrapper}>
        <Button css={S.styles.button({ selected: true })}>아파트</Button>
        <Button css={S.styles.button({ selected: false })}>빌라/주택</Button>
        <Button css={S.styles.button({ selected: true })}>오피스텔</Button>
      </div>
    </div>
  );
};

export default BuildingTypeFilter;
