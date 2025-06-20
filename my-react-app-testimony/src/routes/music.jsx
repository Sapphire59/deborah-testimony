import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/music")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="p-2 text-left text-md/5 leading-7"></div>;
}
