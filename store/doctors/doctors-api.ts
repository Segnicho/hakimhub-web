import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilteredDoctorsResponse, FilterDoctors } from '@/types/institution/institution-detail';

const BASE_URL = 'https://hakim-hub.onrender.com/api/';

export const filterDoctorsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    filterDoctors: builder.query<FilteredDoctorsResponse, FilterDoctors>({
      query: (filter) => {
        const { hospitalId, education, speciality, experience } = filter;
        let url = 'DoctorProfiles/filter'; 

        const queryFilter = [];
        if (hospitalId) queryFilter.push(`institutionId=${hospitalId}`);
        if (experience) queryFilter.push(`experienceYears=${experience}`);
        if (education) queryFilter.push(`educationName=${education}`);

        const body = speciality;

        return {
          url: queryFilter.length > 0 ? `${url}?${queryFilter.join('&')}` : url,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useFilterDoctorsQuery } = filterDoctorsApi;
