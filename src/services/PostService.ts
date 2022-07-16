import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {IPost} from "../models/IPost";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery( {
            baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Post'],
    endpoints: (build  ) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 20) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPosts: build.mutation<IPost, IPost>({
            query: (post  ) => ({
                url: `/posts`,
                method: 'POST',
                body: post,
            }),
            invalidatesTags: result => ['Post']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post  ) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post,
            }),
            invalidatesTags: result => ['Post']
        }),
        deletePost:  build.mutation<IPost, IPost>({
            query: (post  ) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
                body: post,
            }),
            invalidatesTags: result => ['Post']
        }),
    })
})