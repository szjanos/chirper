import cookies from "next-cookies";
import jwt, { JwtPayload } from "jsonwebtoken";
import Router from "next/router";
import type { NextPageContext } from "next";

const IndexPage = () => "redirecting...";

IndexPage.getInitialProps = async (ctx: NextPageContext) => {
  const accessToken = cookies(ctx).access_token || null;
  const decodedToken = accessToken
    ? (jwt.decode(accessToken) as JwtPayload & { user: string })
    : null;
  const username = decodedToken?.user;

  if (!username || !accessToken) {
    if (ctx.res) {
      ctx.res.writeHead(307, { Location: "/login" });
      ctx.res.end();
    } else {
      Router.replace("/login");
    }
  } else if (ctx.res) {
    ctx.res.writeHead(307, { Location: "/chirps" });
    ctx.res.end();
  } else {
    Router.replace("/chirps");
  }

  return {};
};

export default IndexPage;
