import { Posts } from '@/redux/api/types';
import { createFileRoute, useLoaderData, useMatch, useParams } from '@tanstack/react-router';
import styled from 'styled-components';

interface ISearchParams {
  search: { _start: number; limit: number };
}

export const Route = createFileRoute('/_another-layout/news/$id')({
  loaderDeps: ({ search: { _start, limit } }: ISearchParams) => ({ _start, limit }),
  // loader: ({ context: { fetchPosts }, deps: { _start, limit } }) => fetchPosts(_start, limit),
  // loader: ({ deps: { _start, limit } }) =>
  //   storeDispatch(postsApi.endpoints.getPosts.initiate({ start: _start, limit })), //! This example uses RTK Query
  loader: ({ deps: { _start, limit }, context: { fetchPostsRTKQuery } }) =>
    fetchPostsRTKQuery({ start: _start, limit }), //! This example uses RTK Query with context
  component: Article,
  staticData: {
    myData: process.env.STATIC_DATA || 'This message is static data passed via router Route',
  },
});

const Block = styled.div`
  color: ${({ theme }) => theme.palette.error};
  font-size: 25px;
`;

function Article() {
  const params = useParams({ from: '/_another-layout/news/$id' }); //* Or Route.useParams()
  const searchParams = Route.useSearch();
  const { hash } = window.location;
  const posts = useLoaderData({ from: '/_another-layout/news/$id' }).data as Posts;
  const { staticData } = useMatch({ from: '/_another-layout/news/$id' });
  const { myData } = staticData as { myData: string };
  return (
    <div>
      <div> Hello from news.article {JSON.stringify(params)}</div>
      <div>search params: {JSON.stringify(searchParams)}</div>
      <div>hash: {hash}</div>
      <br />
      <br />
      <br />
      <div>
        <div style={{ fontSize: '20px' }}>
          <b>Posts fetched via built-in loader and recieved via createRouter context in Tanstack router</b>
        </div>
        <br />
        <br />
        <div>
          {posts &&
            posts.map((post, idx) => (
              <div key={idx}>
                <div>user: {post.userId}</div>
                <br />
                <div>title: {post.title}</div>
                <br />
                <div>Text: {post.body}</div>
              </div>
            ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <Block>
        <b>{myData}</b>
      </Block>
    </div>
  );
}
