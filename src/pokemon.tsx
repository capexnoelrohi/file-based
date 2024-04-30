import { notFound } from "@tanstack/react-router";
import axios from "axios";

export const fetchPost = async (pokemonId: string) => {
  console.log(`Fetching post with id ${pokemonId}...`);
  await new Promise((r) => setTimeout(r, 500));
  const post = await axios
    .get<{
      name: string;
      order: number;
    }>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((r) => r.data)
    .catch((err) => {
      if (err.response.status === 404) {
        throw notFound();
      }
      throw err;
    });

  return post;
};
