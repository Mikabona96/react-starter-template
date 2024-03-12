import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';
import { fetchPosts } from './utils/fetchPosts.ts';
import { fetchPostsRTKQuery } from './utils/fetchPostsRTKQuery.ts';

export const router = createRouter({
  routeTree,
  context: {
    // Supply the fetchPosts function to the router context
    fetchPosts,
    fetchPostsRTKQuery,
  },
});
