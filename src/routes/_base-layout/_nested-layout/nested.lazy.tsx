import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_base-layout/_nested-layout/nested')({
  component: Nested,
});

function Nested() {
  return <div>Hello from nested page!</div>;
}
