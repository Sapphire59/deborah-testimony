import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 bg-stone-300 border-2 border-rose-300 rounded-md">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>{" "}
        <Link to="/scripture" className="[&.active]:font-bold">
          Scripture
        </Link>
        <Link to="/photos" className="[&.active]:font-bold">
          Photos
        </Link>{" "}
        <Link to="/music" className="[&.active]:font-bold">
          Music
        </Link>{" "}
      </div>

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
