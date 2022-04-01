/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import * as S from "./styled";

type Props = {};

const NumOfRoomsFilter: React.FC<Props> = ({}: Props) => {
  return (
    <div css={S.styles.wrapper}>
      <span css={S.styles.title}>방개수</span>
      <span css={S.styles.subTitle}>중복선택 가능</span>
      <div css={S.styles.buttonWrapper}>
        <Button css={S.styles.button({ selected: true })}>원룸</Button>
        <Button css={S.styles.button({ selected: false })}>투룸</Button>
        <Button css={S.styles.button({ selected: false })}>쓰리룸 이상</Button>
      </div>
    </div>
  );
};

export default NumOfRoomsFilter;
