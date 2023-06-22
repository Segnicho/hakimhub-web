import Institution from "@/types/Hospital";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://hakim-hub.onrender.com/api";

export const hospitalsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl:baseUrl }),
  endpoints: (builder) => ({
    getHospitals: builder.query({
      query: () => ({
        url: "/InsitutionProfile",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetHospitalsQuery } = hospitalsApi;
