import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import  { HospitalDetailResponse,Doctor}  from '@/types/institution/institution-detail';


const BASE_URL = 'https://hakim-hub.onrender.com/api/InsitutionProfile';

export const hospitalDetailApi = createApi({
  reducerPath: 'hospitalDetailApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getHospitalById: builder.query<HospitalDetailResponse, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetHospitalByIdQuery } = hospitalDetailApi;