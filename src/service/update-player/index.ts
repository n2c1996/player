import { Player } from "../entity";

export const updatePlayer = async ({
  id,
  ...player
}: Player): Promise<Player> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/player/${id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(player),
    }
  );

  return response.json();
};
