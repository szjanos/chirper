import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { username, chirpId },
    method,
  } = req;

  switch (method) {
    case "PUT": {
      const remoteRes = await fetch(
        `https://api-chirper.us-east1.apps.akkaserverless.dev/chirps/${username}/chirp/${chirpId}/like`,
        {
          method: "PUT",
        }
      );
      await remoteRes.json();
      res.status(201).json(`{ "liked": true }`);
      break;
    }
    default:
      res.setHeader("Allow", ["PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
