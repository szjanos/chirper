import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { username, chirpId },
    method,
    headers,
  } = req;

  switch (method) {
    case "PUT": {
      const remoteRes = await fetch(
        `https://chirper-api.us-east1.apps.akkaserverless.dev/chirps/${username}/chirp/${chirpId}/like`,
        {
          method: "PUT",
          headers: {
            Authorization: headers.authorization!,
          },
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
