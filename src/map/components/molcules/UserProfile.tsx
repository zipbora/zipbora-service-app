/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

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
