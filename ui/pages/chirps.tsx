import React from "react";
import cookies from "next-cookies";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import jwt, { JwtPayload } from "jsonwebtoken";
import Router, { useRouter } from "next/router";
import type { NextPageContext } from "next";
import Chirps from "../src/components/Chirps";
import { fetchChirps } from "../src/api";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

const ChirpsPage = ({
  chirps,
}: {
  chirps: {
    userName: string;
    chirps: Array<{ chirpId: string; text: string; likes: number }>;
  };
}) => {
  const classes = useStyles();
  const router = useRouter();

  const logout = () => {
    document.cookie =
      "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/login");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Chirper
          </Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Chirps chirps={chirps} />
    </>
  );
};

ChirpsPage.getInitialProps = async (ctx: NextPageContext) => {
  const accessToken = cookies(ctx).access_token || null;
  const decodedToken = accessToken
    ? (jwt.decode(accessToken) as JwtPayload & { user: string })
    : null;
  const username = decodedToken?.user;

  if (!username || !accessToken) {
    if (ctx.res) {
      ctx.res.writeHead(307, { Location: "/" });
      ctx.res.end();
    } else {
      Router.replace("/");
    }
    return {};
  }

  const chirps = await fetchChirps(username, accessToken);
  return {
    chirps,
  };
};

export default ChirpsPage;
