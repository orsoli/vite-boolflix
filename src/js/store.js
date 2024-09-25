// Import reactive from vue
import { reactive } from "vue";

export const store = reactive({
  //  Variables
  searchedMovieResults: [], // Store searched Movie results
  searchedSeriesTvResults: [], // Store searched Tv results
  genreList: [], // Store Genre list object
  moviesCasts: [], // Store movie's Actres list
  seriesTvCasts: [], // Store series Actres list
  // Api Key
  api_key: "da70f1679892aee02a44255296352973",
  // Url's Variables
  searchMovieUrl: "https://api.themoviedb.org/3/search/movie", // Store search Movies url
  searchSeriesTvUrl: "https://api.themoviedb.org/3/search/tv", // Store search Tv url
  imageUrl: "https://image.tmdb.org/t/p/w342", // Store search Image url
  topRatedMoviesUrl: "https://api.themoviedb.org/3/movie/top_rated", // Top rated movies url
  topRatedSeriesTvUrl: "https://api.themoviedb.org/3/tv/top_rated", // Top rated series Tv url
  genreUrl: "https://api.themoviedb.org/3/genre/movie/list", // Genre list url
});
