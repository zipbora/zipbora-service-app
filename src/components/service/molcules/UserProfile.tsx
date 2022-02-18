import { jsx, css } from "@emotion/react";
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
        avatar={
          <Avatar sx={{ bgcolor: "#5693EF" }} aria-label="profile">
            Z
          </Avatar>
        }
        title="집보는중"
      />
    </div>
  );
};

export default UserProfile;
