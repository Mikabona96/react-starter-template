import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_another-layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div>I'm another layout</div>
      <Outlet />
    </div>
  );
}
