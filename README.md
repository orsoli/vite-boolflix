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

### Milestone 1:
**Create a basic layout with a searchbar (input and button), where we can write the name of a movie, either fully or partially.
By clicking the button, search the API for all movies containing what the user has written.
After the API response, we want to display the following values for each movie found:**

**- Title**

**- Original Title**

**- Language**

**- Rating**

- Added input form type text with a button
- Create variables to store the url, values gets from user inputs and searched result get from API call
- Use v-model directive in input element and link whith  searchInputResult
- Create a function in methods to call Api and get searching results using axios, store in searchedResult variable
- Use api_key and query params in axios function. value of query is the searchInputResult value
- Create @click event in buton and @keyup in input to and call back the getsearchedResults function
- Create in an InfoMovieCard component geting infos the title, original title language and rating from the searchMoviesInput component
- Import InfoMovieCard component in AppMain
- Store the results in store.js file and use in InfoMoviesCard and other files if is necessary.
- In InfoMoviesCard crate a card elements and use v-if searchedResults to show if we have started to search and v-for to show for each result all info we need
