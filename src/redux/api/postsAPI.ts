import { API } from './api';
import * as types from './types';

export const postsApi = API.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<types.Posts, /*args ==>*/ { start: number; limit: number }>({
      query: ({ limit, start }) => `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
      providesTags: () => [{ type: 'Post' }],
    }),
    addPost: builder.mutation<types.Post, Omit<types.Post, 'id'>>({
      query: payload => ({
        url: '/posts',
        method: 'POST',
        body: JSON.stringify(payload),
      }),
      invalidatesTags: () => [{ type: 'Post' }],
    }),
  }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery, useAddPostMutation } = postsApi;
