// Import reactive from vue
import { reactive } from "vue";

export const store = reactive({
  //  Variables
  searchedMovieResults: [], // Store searched Movie results
  searchedSeriesTvResults: [], // Store searched Tv results
  // Url's Variables
  searchMovieUrl: "https://api.themoviedb.org/3/search/movie", // Store search Movies url
  searchSeriesTvUrl: "https://api.themoviedb.org/3/search/tv", // Store search Tv url
  imageUrl: "https://image.tmdb.org/t/p/w500", // Store search Image url
});
