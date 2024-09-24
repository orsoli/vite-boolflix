### Description
**In this exercise, we start replicating the logic behind many web applications that allow the viewing of movies and TV shows.
To do this, as many renowned applications do, we will use an API that lets us retrieve a set of results relevant to our search: TheMovieDb.**

**At this URL https://developers.themoviedb.org/3, you will find all possible API calls.
You can experiment with them later, but first, focus on Search > Movies.
With this call, you can search for all the movies related to a query. Pass query and api_key as parameters, and you will see your results.**

### Milestone 0:
**Design the application structure using props, custom events, and global state (store.js), based on the experience of previous exercises.**
- Create components `<AppHeader />`, `<AppMain />`  and `<AppFooter />`.
- Create `<SearchForm />` component
- Create generic components: `<BaseInput />` and `<BaseButton />`
- Import 3 macro components in `<App.vue />`
- Import based components `<BaseInput />` and `<BaseButton />` in `SearchForm`
- Import `<SearchForm />` in `AppHeader` component
- Create `store.js` file to store variables globaly

### Milestone 1:
**Create a basic layout with a searchbar (input and button), where we can write the name of a movie, either fully or partially.
By clicking the button, search the API for all movies containing what the user has written.
After the API response, we want to display the following values for each movie found:**

**- Title**

**- Original Title**

**- Language**

**- Rating**

- From `SearchForm` component call based components in `<template>` element and listen event emited from components
- In `SearchForm` define functions to call Api and save info in `store.js` in events emited from `<BaseInput />` and `<BaseButton />`.
- Create a component card `InfoMediaCard` to show dinamically info movies or series tv get info from props.
- Create components to show list Movies and Series Tv: `MoviesListView` and `SeriesListView`.
- Call `InfoMediaCard` component in `MoviesListView` and get the props dinamically get from `store.js`.

### Milestone 2:
**Let’s transform the static language string into an actual flag of the corresponding country, managing the case where we don’t have the flag of the country returned by the API (flags are not available in FontAwesome).
Then expand the search to include TV series. With the same search action, we should retrieve both the movies that match and the TV series, being careful to have similar values in the end (TV series and movies have different fields in the JSON response, similar but not always identical).
Here’s an example of a call for TV series:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs.**

- Install flag-icons library in node_modules and use in style.

    `npm i flag-icons`

    `@use "/node_modules/flag-icons/css/flag-icons.min.css";`

- Add span element with flag content with dinamically class.

    ``` <span :class="`fi fi-${searchedResult.original_language}`"></span> ```

- Call `InfoMediaCard` component in `SeriesTvListView` and get the props dinamically get from `store.js`.



### Milestone 3: 
**In this milestone, the first thing we add is the cover of the movie or series to our list. The API only gives us the final part of the URL, as we can generate many different sizes from that portion of the URL. We need to get the base URL of the images from TMDB:
https://image.tmdb.org/t/p/ and then add the size we want to generate (we can find all the possible sizes at this link:
https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) and then add the final part of the URL sent by the API.**

**Then, we transform the rating from a decimal number between 1 and 10 into an integer between 1 and 5, so that we can print a number of full stars from 1 to 5 on the screen, leaving the remaining ones empty (we can find the icons in FontAwesome).
We always round up to the next whole number, and we don’t handle half-full (or half-empty
) icons.**

- Create in `store.js` file a variable to store the base images url: https://image.tmdb.org/t/p/
- Add in Movie and Tv list `<img src="" />` element in `<InfoMediaCard>` component
- Add dinamically in `:src` attribute the value: images url get from `store.js` + size of img eg. `/w500` + `backdrop_path:` of movie or tv get from `searchedMovieResults` or `searchedTvResults` array's object variable.
- Ceate `star` variable to store stars number.
- Define arrow function to store, integer from 0 to 5 using `Math.round(rating/2)` method, in `stars` variable.
- `li`in `InfoMediaCard` component, create a `div` element contained stars icons list and use `v-for` directive based on stars number.

### Milestone 4: 
**We transform what we have done so far into a real web app by creating a complete Netflix-like layout:**

**- A header that contains the logo and a search bar.**

**- After searching for something in the search bar, the results appear as "cards" where the background is represented by the cover image (recommended poster_path with w342).**

**- When hovering over a card, additional information that was previously fetched, along with the overview, appears.**

- Edit in `InfoMediaCard` card style and added postres path instead of backDrop path
- Edit the info in card: delete lengage and added overview item
- Craete `isVisible` flag initial value `false` and using it create dinamically class to toggle `d-none` value in poster and card-info elements
- Define a function `visibilityHandling` invert `isvisible` flag value.
- Use `@mouseenter` and `@mouseleave` directive events in card-info element to call back `visibilityHandling` function

