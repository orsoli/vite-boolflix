// Import reactive from vue
import { reactive } from "vue";

export const store = reactive({
  //  Variables
  searchedMovieResults: [], // Store searched Movie results
  searchedTvResults: [], // Store searched Tv results
  imageUrl: "https://image.tmdb.org/t/p/w500", // Store search Image url
});
