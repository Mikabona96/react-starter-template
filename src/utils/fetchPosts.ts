type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type Posts = Post[];

export const fetchPosts = async (start: number, limit: number): Promise<Posts> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};
