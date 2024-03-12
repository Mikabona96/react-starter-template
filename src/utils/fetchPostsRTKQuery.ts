import { postsApi } from '@/redux/api/postsAPI';
import { storeDispatch } from '@/redux/store';

type Args = {
  start: number;
  limit: number;
};
export const fetchPostsRTKQuery = ({ limit, start }: Args) => {
  return storeDispatch(postsApi.endpoints.getPosts.initiate({ start, limit }));
};
