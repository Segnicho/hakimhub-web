import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const API_BASE_URL = "https://hakim-hub.onrender.com"
export const doctorDetail = createApi({
    reducerPath:"doctorDetail",
    baseQuery:fetchBaseQuery({baseUrl:API_BASE_URL}),
    endpoints:(builder) => (
        {
            getDoctorById:builder.query<DoctorResponse, string>({
                query:(id) => `/api/DoctorProfiles/${id} `
            })
        }
    )
})

export const {useGetDoctorByIdQuery} = doctorDetail