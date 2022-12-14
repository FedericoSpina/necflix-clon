import axios from "axios";

export const TMDB = {
  api: axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: "es-ES",
    },
    timeout: 2000,
  }),
  path: {
    movies: {
      popular: "/movie/popular",
      top_rated: "/movie/top_rated",
      getTrailer: (id) => `/movie/${id}/videos`,
    },
    series: {
      popular: "/tv/popular",
      top_rated: "/tv/top_rated",
    },
  },
  images: {
    base_url: "https://image.tmdb.org/t/p/",
    poster_high_quality: "https://image.tmdb.org/t/p/w780/",
    poster_low_quality: "https://image.tmdb.org/t/p/w185/",
    backdrop_high_quality: "https://image.tmdb.org/t/p/w1280/",
    backdrop_low_quality: "https://image.tmdb.org/t/p/w300/",
    poster_sizes: {
      w92: "w92",
      w154: "w154",
      w185: "w185",
      w342: "w342",
      w500: "w500",
      w780: "w780",
      original: "original",
    },
    backdrop_sizes: {
      w300: "w300",
      w780: "w780",
      w1280: "w1280",
      original: "original",
    },
  },
};