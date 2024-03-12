import { createLazyFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/pages/Home/Home';

export const Route = createLazyFileRoute('/_base-layout/')({
  component: HomePage,
});
