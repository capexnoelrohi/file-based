import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/_layout/second-blog")({
  component: () => <div>Hello /blog/_layout/second-blog!</div>,
});
