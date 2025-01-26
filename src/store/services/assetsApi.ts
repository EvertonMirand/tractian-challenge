import { Location } from '@/types/location';
import { baseUrl } from '@/utils/endpoint.utils';
import { buildTree } from '@/utils/tree';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const assetsApi = createApi({
  reducerPath: 'assetsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAssets: builder.query<Location[], string>({
      query: (companyId: string) => `companies/${companyId}/assets`,
      transformResponse: (response: Location[]) => {
        return buildTree(response);
      },
    }),
  }),
});

export const { useGetAssetsQuery, useLazyGetAssetsQuery } = assetsApi;
