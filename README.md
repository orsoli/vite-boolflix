### Description
**In this exercise, we start replicating the logic behind many web applications that allow the viewing of movies and TV shows.
To do this, as many renowned applications do, we will use an API that lets us retrieve a set of results relevant to our search: TheMovieDb.**

**At this URL https://developers.themoviedb.org/3, you will find all possible API calls.
You can experiment with them later, but first, focus on Search > Movies.
With this call, you can search for all the movies related to a query. Pass query and api_key as parameters, and you will see your results.**

### Milestone 0:
**Design the application structure using props, custom events, and global state (store.js), based on the experience of previous exercises.**
- Create components AppHeader, AppMainand AppFooter.
- Create utils components: SearchMoviesInput
- Import 3 macro components in App.vue
- Import SearchMoviesInput component in AppHeader