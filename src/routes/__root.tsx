import { createRootRouteWithContext } from '@tanstack/react-router';
import { RootLayout } from '@/layouts/root';
import { fetchPosts } from '@/utils/fetchPosts';
import { fetchPostsRTKQuery } from '@/utils/fetchPostsRTKQuery';

// export const Route = createRootRoute({
//   component: RootLayout, //* remove this line if it's needed
//   notFoundComponent: NotFound, //! This is global Not found, you can add notFoundComponent to layouts or routes
//   pendingComponent: () => <div>Spinner in __root.tsx</div>, // Todo ==> Should be tested
// });

export const Route = createRootRouteWithContext<{
  fetchPosts: typeof fetchPosts;
  fetchPostsRTKQuery: typeof fetchPostsRTKQuery;
}>()({
  component: RootLayout, //* remove this line if it's needed
  notFoundComponent: NotFound, //! This is global Not found, you can add notFoundComponent to layouts or routes
  pendingComponent: () => <div>Spinner in __root.tsx</div>, // Todo ==> Should be tested
});

function NotFound() {
  return <div>This page doesn't exist</div>;
}
