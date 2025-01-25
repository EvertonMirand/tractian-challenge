import { baseUrl } from "@/utils/endpoint.utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Company {
  id: number;
  name: string;
}

export const companiesApi = createApi({
  reducerPath: "companiesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], void>({
      query: () => "companies",
    }),
  }),
});

export const { useGetCompaniesQuery } = companiesApi;
