import React, { Fragment, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, blue } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    root: {
      width: "40%",
      backgroundColor: palette.background.paper,
      margin: "auto",
      marginTop: spacing(1),
    },
    inline: {
      display: "inline",
    },
    orange: {
      color: palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    like: {
      color: blue[400],
      marginLeft: spacing(0.5),
      marginRight: spacing(0.5),
      fontSize: 16,
    },
    newChirp: {
      resize: "none",
      width: "100%",
    },
    chirpBtn: {
      textAlign: "right",
    },
  })
);

const Chirps = ({
  chirps,
}: {
  chirps: {
    userName: string;
    chirps: Array<{ chirpId: string; text: string; likes: number }>;
  };
}) => {
  const classes = useStyles();
  const [newChirp, setNewChirp] = useState(undefined);

  const recordChirp = (event: React.SyntheticEvent<EventTarget>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setNewChirp(event.target.value);
  };

  const userNameToBadge = (userName: string) =>
    (userName[0] + userName[userName.length - 1]).toUpperCase();

  const sendNewChirp = async () => {
    const response = await fetch(
      `${window.location.origin}/api/chirps/${chirps.userName}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newChirp }),
      }
    );
    await response.json();
    window.location.reload();
  };

  const like = async (chirpId: string) => {
    const response = await fetch(
      `${window.location.origin}/api/chirps/${chirps.userName}/chirp/${chirpId}/like`,
      {
        method: "PUT",
      }
    );
    await response.json();
    window.location.reload();
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12}>
        <TextareaAutosize
          className={classes.newChirp}
          aria-label="empty textarea"
          placeholder=" Say something..."
          autoFocus
          rows={5}
          rowsMax={5}
          rowsMin={5}
          value={newChirp}
          onChange={recordChirp}
        />
      </Grid>
      <Grid item xs={12} className={classes.chirpBtn}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!newChirp}
          onClick={sendNewChirp}
        >
          Chirp
        </Button>
      </Grid>
      <Grid item xs={12}>
        <List>
          {chirps.chirps.map(({ chirpId, text, likes }) => (
            <Fragment key={chirpId}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar className={classes.orange}>
                    {userNameToBadge(chirps.userName)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={text}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        by {chirps.userName}
                      </Typography>
                      {" — "}
                      <FavoriteIcon
                        className={classes.like}
                        onClick={() => like(chirpId)}
                      />
                      {likes}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Chirps;
