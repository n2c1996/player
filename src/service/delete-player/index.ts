export const deletePlayer = async (playerID: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/player/${playerID}`,
    {
      method: "DELETE",
    }
  );

  return response.json();
};
