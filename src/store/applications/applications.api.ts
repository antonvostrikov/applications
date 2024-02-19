import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IApplications } from '../../interfaces/applications.interface'

export const applicationsApi = createApi({
  reducerPath: 'applicationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (build) => ({
    getApplications: build.query<IApplications[], void>({
      query: () => ({
        method: 'GET',
        url: '/applications'
      })
    }),
    addApplication: build.mutation<IApplications[], IApplications>({
      query: (application) => ({
        method: 'POST',
        url: '/applications',
        body: application
      })
    })
  })
})

export const { useGetApplicationsQuery, useAddApplicationMutation } = applicationsApi