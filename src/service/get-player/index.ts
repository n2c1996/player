import { Player } from "../entity";

export const getPlayer = async (): Promise<Array<Player>> => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/player`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  return response.json();
};
