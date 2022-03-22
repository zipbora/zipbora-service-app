/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const UserProfile: React.FC = () => {
  const styles = {
    wrapper: css`
      margin: 1rem;
    `,
  };

  return (
    <div>
      <CardHeader
        css={css`
          span {
            font-weight: bold;
            font-size: 1rem;
          }
        `}
        avatar={
          <Avatar
            css={css`
              background-color: #6b56ef;
            `}
            aria-label="profile"
          >
            Z
          </Avatar>
        }
        title="집보는중"
      />
    </div>
  );
};

export default UserProfile;
