import Link from "next/link";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { jsx, css } from "@emotion/react";

const FilterMenu: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("radio checked", e.target.value);
  };
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const styles = {
    chipList: css`
      padding: 0.938rem;
      overflow: auto;
      -ms-overflow-style: none;
    `,
    chip: css`
      height: 1.75rem;
      color: #555555;
      border: 1px solid #dcdcdc;
    `,
  };

  return (
    <>
      <Stack direction="row" spacing={1} sx={styles.chipList}>
        <Chip
          label="매매"
          sx={styles.chip}
          variant="outlined"
          onClick={handleClick}
        />
        <Chip
          label="유형"
          sx={styles.chip}
          variant="outlined"
          onClick={handleClick}
        />
        <Chip
          label="평형"
          sx={styles.chip}
          variant="outlined"
          onClick={handleClick}
        />
        <Chip
          label="Clickable"
          sx={styles.chip}
          variant="outlined"
          onClick={handleClick}
        />
        <Chip
          label="Clickable"
          sx={styles.chip}
          variant="outlined"
          onClick={handleClick}
        />
        <Chip
          label="세대수"
          sx={styles.chip}
          variant="outlined"
          onClick={handleClick}
        />
        <Chip
          label="입주년차"
          sx={styles.chip}
          variant="outlined"
          onClick={handleClick}
        />
        <Chip
          label="용적률"
          sx={styles.chip}
          variant="outlined"
          onClick={handleClick}
        />
      </Stack>
    </>
  );
};

export default FilterMenu;
