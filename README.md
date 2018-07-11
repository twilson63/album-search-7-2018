# Albums Search Challenge

Using React and Material UI create a music search feature
calling the Spotify API.

The three files you will need to complete:

- src/lib/search.js
- src/components/list.js
- src/components/form.js

### Search

Use the env variables URL and TOKEN to create a search function that returns a promise

### Form

The form imports the search function and calls the search function with search text to get a promise that resolves an array of albums. Then the form, invokes the onResults prop that is passed in via parent app component.

> HINT: You will need to create component state to manage the search criteria in your controlled input

### List

When the search returns a list of albums, list the items as album cards with as much info as you can.
