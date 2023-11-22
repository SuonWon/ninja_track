import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";



const cashInApi = createApi({
    reducerPath: "cashIn",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints(builder) {
        return {
            fetchGetAllData: builder.query({
                query: () => {
                    return {
                        url: '/api/transaction/',
                        method: 'GET'
                    }
                }
            }),

            fetchGetData: builder.query({
                query: (id) => {
                    return {
                        url: `/api/transaction/${id}`,
                        method: 'GET'
                    }
                }
            }),

            createData: builder.mutation({
                query: (cashInData) => {
                    return {
                        url: '/api/transaction/add',
                        method: 'POST',
                        body: cashInData
                    }
                }
            }),

            updateData: builder.query({
                query: (id) => {
                    return {
                        url: `/api/transaction/edit/${id}`,
                        method: 'PUT'
                    }
                }
            }),

            deleteData: builder.mutation({
                query: (id) => {
                    return {
                        url: `/api/transaction/delete/${id}`,
                        method: 'DELETE'
                    }
                }
            })
        }
    }
});

export const { useFetchGetAllDataQuery, useFetchGetDataQuery, useCreateDataMutation, useUpdateDataMutation, useDeleteDataMutation } = cashInApi;

export { cashInApi }