import { createLazyFileRoute } from '@tanstack/react-router';
import { About } from '@/pages/About/About';

export const Route = createLazyFileRoute('/_base-layout/about')({
  component: About,
});
