/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import * as S from "./styled";

type Props = {};

const AddtionalOptionFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={S.styles.wrapper}>
      <span css={S.styles.title}>추가옵션</span>
      <span css={S.styles.subTitle}>중복선택 가능</span>
      <div css={S.styles.buttonWrapper}>
        <Button css={S.styles.button({ selected: true })}>주차가능</Button>
        <Button css={S.styles.button({ selected: false })}>승강기</Button>
        <Button css={S.styles.button({ selected: false })}>풀옵션</Button>
      </div>
      <div css={S.styles.buttonWrapper}>
        <Button css={S.styles.button({ selected: false })}>반려동물</Button>
        <Button css={S.styles.button({ selected: false })}>전세대출</Button>
        <Button css={S.styles.button({ selected: false })}>신축</Button>
      </div>
    </div>
  );
};

export default AddtionalOptionFilter;
