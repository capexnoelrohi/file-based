import * as React from "react";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  component: () => <div>Hello /admin!</div>,
});
