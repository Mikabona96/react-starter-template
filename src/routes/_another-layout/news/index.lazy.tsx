import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_another-layout/news/')({
  component: News,
});

function News() {
  return <div>Hello from news folder news!</div>;
}
