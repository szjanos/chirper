import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { username },
    method,
  } = req;

  switch (method) {
    case "GET": {
      const remoteRes = await fetch(
        `https://api-chirper.us-east1.apps.akkaserverless.dev/chirps/${username}`
      );
      const json = await remoteRes.json();
      res.status(200).json(json);
      break;
    }
    case "POST": {
      const remoteRes = await fetch(
        `https://api-chirper.us-east1.apps.akkaserverless.dev/chirps/${username}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
