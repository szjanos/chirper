import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(({ palette, spacing }) => ({
  paper: {
    marginTop: spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: spacing(1),
    backgroundColor: palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: spacing(1),
  },
  submit: {
    margin: spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();

  const saveName = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.cookie = `name=${event.target[0].value}; path=/`;
    window.location.reload();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Greeting
        </Typography>
        <form className={classes.form} autoComplete="off" onSubmit={saveName}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="chriper"
            label="Chirper"
            name="chriper"
            autoFocus
            inputProps={{
              pattern: "[a-zA-Z]{3,8}",
              title:
                "Username should be alphabetical characters only with min 3 max 8 length!",
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Go! 🚀 🚀 🚀
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
