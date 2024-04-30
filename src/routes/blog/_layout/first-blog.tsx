import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/_layout/first-blog")({
  component: () => <div>Hello /blog/first-blog!</div>,
});
