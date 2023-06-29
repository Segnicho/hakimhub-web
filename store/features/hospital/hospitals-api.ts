import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://hakim-hub.onrender.com/api/";

export const hospitalsApi = createApi({
  reducerPath: 'hospitalsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getHospitals: builder.query({
      query: (params) => {
        const { name, openStatus, services, operationYears } = params;
        let url = "InsitutionProfile/search-institutions";

        const queryParams = [];
        queryParams.push(`openStatus=${openStatus}`);
        queryParams.push(`operationYears=${operationYears}`)
        queryParams.push(`name=${encodeURIComponent(name)}`);

        const body = services ;

        return { url: queryParams.length > 0 ? `${url}?${queryParams.join("&")}` : url, method: "POST", body };
      },
    }),
  }),
});

export const { useGetHospitalsQuery } = hospitalsApi;
