/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import * as S from "./styled";

type Props = {};

const TransactionTypeFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={S.styles.wrapper}>
      <span css={S.styles.title}>거래유형</span>
      <span css={S.styles.subTitle}>중복선택 가능</span>
      <div css={S.styles.buttonWrapper}>
        <Button css={S.styles.button({ selected: true })}>매매</Button>
        <Button css={S.styles.button({ selected: false })}>전세</Button>
        <Button css={S.styles.button({ selected: true })}>월세</Button>
      </div>
    </div>
  );
};

export default TransactionTypeFilter;
