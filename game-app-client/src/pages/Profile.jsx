import React from "react";
import "../styles/profile.scss"
import useUserStats from "../hooks/useUserStats";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
export default function Profile() {
  const { status, data, error, isFetching } = useUserStats();
  const useStyles = makeStyles((theme) => ({
    Text: {
      color: "White",
      //background: theme.palette.main,
    },
  }));
  const classes = useStyles();
  return (
    <div>
      {isFetching === false && data.user !== null && (
        <div>
          <img className="profilePicture" src={data.photos} />
          <Typography className={classes.Text} variant="h3" gutterBottom>
            {data.user}
          </Typography>
        </div>
      )}
    </div>
  );
}
