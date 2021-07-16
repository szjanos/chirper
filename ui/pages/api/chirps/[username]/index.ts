import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { username },
    method,
    headers,
  } = req;

  switch (method) {
    case "GET": {
      const remoteRes = await fetch(
        `https://chirper-api.us-east1.apps.akkaserverless.dev/chirps/${username}`,
        {
          headers: {
            Authorization: headers.authorization!,
          },
        }
      );
      const json = await remoteRes.json();
      res.status(200).json(json);
      break;
    }
    case "POST": {
      const remoteRes = await fetch(
        `https://chirper-api.us-east1.apps.akkaserverless.dev/chirps/${username}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: headers.authorization!,
          },
          body: JSON.stringify(req.body),
        }
      );
      await remoteRes.json();
      res.status(201).json(`{ "created": true }`);
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
