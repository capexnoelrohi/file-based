import { createFileRoute } from "@tanstack/react-router";
import { fetchPost } from "@/pokemon";

export const Route = createFileRoute("/view/$id")({
  loader: async ({ params }) => fetchPost(params.id),
  component: PokemonComponent,
});

function PokemonComponent() {
  const pokemon = Route.useLoaderData();
  return <div>{pokemon?.name ?? "Not found"}</div>;
}
