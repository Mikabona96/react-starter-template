import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_base-layout/_nested-layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div>I'm nested layout</div>
      <Outlet />
    </div>
  );
}
