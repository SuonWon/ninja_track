import { configureStore } from "@reduxjs/toolkit";
import { cashInApi } from "../api/cashInApi";

export const store = configureStore({
    reducer: {
        [cashInApi.reducerPath]: cashInApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(cashInApi.middleware),
});

export { useFetchGetAllDataQuery, useFetchGetDataQuery, useCreateDataMutation, useUpdateDataMutation, useDeleteDataMutation } from '../api/cashInApi'