import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { username },
    method,
  } = req;

  switch (method) {
    case "PUT": {
      const remoteRes = await fetch(
        `https://chirper-api.us-east1.apps.akkaserverless.dev/user/${username}/login`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        }
      );
      const resp = await remoteRes.json();
      res.status(200).json(`{ "accessToken": "${resp.value}" }`);
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
