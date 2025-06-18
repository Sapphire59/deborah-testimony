import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div class="container mx-auto px-6 ">
      <div className="p-2 text-left">
        <div class="grid grid-cols-2 gap-6">
          <div>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
