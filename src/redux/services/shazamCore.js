import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/src/redux/MockResponse", //"https://shazam.p.rapidapi.com"
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "07e8b83daamsh5c57cc13b08b5cbp1bbe17jsn170e1160443a"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "getTopChartsResponse.json" }), // "/charts/track"
    getSongDetails: builder.query({
      query: (songid) => `songDetailsResponse/${songid}.json`, // `/songs/get-details?key=${songid}`
    }),
    getSongRelated: builder.query({
      query: (songid) => "getSongRelatedResponse.json",
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
