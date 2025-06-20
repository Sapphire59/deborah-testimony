import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/photos")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div class="container mx-auto px-3">
      <div className="p-2 text-left text-md/5 leading-7"></div>
    </div>
  );
}
