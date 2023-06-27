import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://hakim-hub.onrender.com/api/";

export const hospitalsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getHospitals: builder.query({
      query: (params) => {
        const { name, openStatus, services, operationYears } = params;
        let url = "InsitutionProfile/search-institutions";

        const queryParams = [];
        if (openStatus) queryParams.push(`openStatus=${openStatus}`);
        if (operationYears) queryParams.push(`operationYears=${operationYears}`)
        if (name) queryParams.push(`name=${encodeURIComponent(name)}`);

        const body = services ;

        return { url: queryParams.length > 0 ? `${url}?${queryParams.join("&")}` : url, method: "POST", body };
      },
    }),
  }),
});

export const { useGetHospitalsQuery } = hospitalsApi;
