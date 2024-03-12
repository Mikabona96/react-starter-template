import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API = createApi({
  reducerPath: 'api',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery(/*{baseUrl: ''}*/), //! Global baseUrl use if there is one API url, or just provide url in endpoints
  endpoints: () => ({}),
});
