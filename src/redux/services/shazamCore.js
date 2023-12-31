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
    getSongsByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongDetails: builder.query({
      query: (songid) => `songDetailsResponse/${songid}.json`, // `/songs/get-details?key=${songid}`
    }),
    getSongRelated: builder.query({
      query: (songid) => "getSongRelatedResponse.json",
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `artistsDetailsResponse/${artistId}.json`, // `/artists/get-summary?id=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `getSongsByCountryResponse.json`, //`/charts/conutry?country_code=${countryCode}`
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `getSongsBySearchResponse.json`, //`/search?term=${searchTerm}`
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
