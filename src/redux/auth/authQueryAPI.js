import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const autQueryhApi = createApi({
  reducerPath: 'user',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    createNewUser: builder.mutation({
      query: body => ({
        url: '/signup',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    loginUser: builder.mutation({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    getCurrentUser: builder.query({
      query: () =>'/current',
     })
  }),
});

export const {
  useGetCurrentUserQuery,
  useCreateNewUserMutation,
  useLoginUserMutation,
  useLogOutUserMutation,
} = autQueryhApi;

