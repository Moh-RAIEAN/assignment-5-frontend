import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookListBaseApi = createApi({
  reducerPath: "bookListApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: () => ({}),
});
