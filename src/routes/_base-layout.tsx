import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_base-layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div>I'm a base layout</div>
      <Outlet />
    </div>
  );
}
