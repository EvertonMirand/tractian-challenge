import { Asset } from '@/types/assets';

import { baseUrl } from '@/utils/endpoint.utils';
import { buildTree } from '@/utils/tree';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const assetsApi = createApi({
  reducerPath: 'assetsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAssets: builder.query<Asset[], string>({
      query: (companyId: string) => `companies/${companyId}/assets`,
      transformResponse: (response: Asset[]) => {
        return buildTree(response);
      },
    }),
  }),
});

export const { useGetAssetsQuery } = assetsApi;
