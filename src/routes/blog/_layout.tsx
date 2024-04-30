import { createFileRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/_layout")({
  component: () => (
    <main>
      Blog layout
      <Link
        to="/blog/first-blog"
        className="block py-1 text-blue-800 hover:text-blue-600"
        activeOptions={{ exact: true }}
        activeProps={{
          className: "font-bold",
        }}
      >
        First blog
      </Link>
      <Link
        to="/blog/second-blog"
        activeOptions={{ exact: true }}
        activeProps={{
          className: "font-bold",
        }}
        className="block py-1 text-blue-800 hover:text-blue-600"
      >
        Second blog
      </Link>
      <Outlet />
    </main>
  ),
});
