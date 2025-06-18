import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/scripture')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/scripture"!</div>
}
