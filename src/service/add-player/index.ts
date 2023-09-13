import { Player } from "../entity";

interface Payload {
  name: string;
  position: string;
}

export const addPlayer = async (player: Payload): Promise<Player> => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/player`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(player),
  });

  return response.json();
};
