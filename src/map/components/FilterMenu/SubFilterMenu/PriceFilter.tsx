/**
 *  @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { Slider } from "@mui/material";
import { useState } from "react";
import styles from "./styled";

type Props = {};
const PriceFilter: React.FC<Props> = () => {
  const [deposit, setDeposit] = useState([20, 40]);
  const [monthlyRent, setMonthlyRent] = useState([0, 20]);
  const [salePrice, setSalePrice] = useState([0, 20]);
  const depositMarks = [
    { value: 0, label: "최소" },
    { value: 200, label: "최대" },
  ];
  const monthlyRentMarks = [
    { value: 0, label: "최소" },
    { value: 200, label: "최대" },
  ];
  const salePriceMarks = [
    { value: 0, label: "최소" },
    { value: 200, label: "최대" },
  ];
  const handleChangeDeposit = (event, newValue) => {
    setDeposit(newValue);
  };
  const handleChangeMonthlyRent = (event, newValue) => {
    setMonthlyRent(newValue);
  };
  const handleChangeSalePrice = (event, newValue) => {
    setSalePrice(newValue);
  };
  return (
    <div css={styles.wrapper}>
      <span css={styles.title}>보증금/전세금</span>
      <Slider
        getAriaLabel={() => "Price range"}
        min={0}
        max={200}
        onChange={handleChangeDeposit}
        value={deposit}
        marks={depositMarks}
        css={styles.slider}
      />
      <span css={styles.title}>월세</span>
      <Slider
        getAriaLabel={() => "Price range"}
        step={10}
        min={0}
        max={200}
        onChange={handleChangeMonthlyRent}
        value={monthlyRent}
        marks={depositMarks}
        css={styles.slider}
      />
      <span css={styles.title}>매매가</span>
      <Slider
        getAriaLabel={() => "Price range"}
        min={0}
        max={200}
        onChange={handleChangeSalePrice}
        value={salePrice}
        marks={depositMarks}
        css={styles.slider}
      />
    </div>
  );
};

export default PriceFilter;
