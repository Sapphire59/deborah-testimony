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
            <p class="border-1 bg-white rounded-md shadow-2xl">
              {" "}
              My name is Deborah Chacko.
            </p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
