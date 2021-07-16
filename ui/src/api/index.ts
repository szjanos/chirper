const BASE_URL = "https://chirper-api.us-east1.apps.akkaserverless.dev";

const throwErrorIfExists = (jsonData: any) => {
  const { error } = jsonData;
  if (error) {
    throw new Error(error);
  }
  return jsonData;
};

export const register = async (
  username: string,
  password: string
): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/user/${username}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });
  throwErrorIfExists(await response.json());
  return response.ok;
};

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await fetch(`${BASE_URL}/user/${username}/login`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });
  const { value } = throwErrorIfExists(await response.json());
  return value;
};

type ChirpsResponse = {
  userName: string;
  chirps: Array<{ chirpId: string; text: string; likes: number }>;
};

export const fetchChirps = async (
  username: string,
  accessToken: string
): Promise<ChirpsResponse> => {
  const response = await fetch(`${BASE_URL}/chirps/${username}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const jsonData = throwErrorIfExists(await response.json());
  return jsonData as ChirpsResponse;
};

export const chirp = async (
  username: string,
  message: string,
  accessToken: string
): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/chirps/${username}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ text: message }),
  });
  throwErrorIfExists(await response.json());
  return response.ok;
};

export const like = async (
  username: string,
  chirpId: string,
  accessToken: string
): Promise<boolean> => {
  const response = await fetch(
    `${BASE_URL}/chirps/${username}/chirp/${chirpId}/like`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  throwErrorIfExists(await response.json());
  return response.ok;
};
