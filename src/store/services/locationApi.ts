import { Location } from '@/types/location';
import { baseUrl } from '@/utils/endpoint.utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const locationsApi = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getLocations: builder.query<Location[], string>({
      query: (companyId: string) => `companies/${companyId}/locations`,
      transformResponse: (response: Location[]) => {
        return response;
      },
    }),
  }),
});

export const { useGetLocationsQuery } = locationsApi;
