import React from "react";
import cookies from "next-cookies";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import type { NextPageContext } from "next";
import Login from "../src/Login";
import Chirps from "../src/Chirps";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

const IndexPage = ({
  // userName,
  accessToken,
  isLoggedIn,
  chirps,
}: {
  // userName: string;
  accessToken: string;
  isLoggedIn: boolean;
  chirps: {
    userName: string;
    chirps: Array<{ chirpId: string; text: string; likes: number }>;
  };
}) => {
  const classes = useStyles();

  const logout = () => {
    document.cookie = "name=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    document.cookie =
      "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    window.location.reload();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Chirper
          </Typography>
          {isLoggedIn && (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {isLoggedIn ? (
        <Chirps chirps={chirps} accessToken={accessToken} />
      ) : (
        <Login />
      )}
    </>
  );
};

IndexPage.getInitialProps = async (ctx: NextPageContext) => {
  const userName = cookies(ctx).name || null;
  const accessToken = cookies(ctx).access_token || null;
  const isLoggedIn = !!userName;

  const baseUrl = ctx.req
    ? `http://${ctx.req.headers.host}`
    : window.location.origin;

  let chirps = [];

  if (isLoggedIn) {
    const res = await fetch(`${baseUrl}/api/chirps/${userName}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    chirps = await res.json();
  }

  return {
    userName,
    accessToken,
    isLoggedIn,
    chirps,
  };
};

export default IndexPage;
