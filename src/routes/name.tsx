import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/name")({
  component: () => <div>Hello /name!</div>,
});
