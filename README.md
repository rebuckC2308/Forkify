# Forkify:

This is the final project of The Complete JavaScript Course 2022: From Zero to Expert!

## Project Overview and Planning:

this application is about searching for recipes and displaying them in the UI

### A user will input a search term

- if there are > 10 results they will be shown on multiple pages
- if a result is selected the UI will update to show that specific recipe's details
- the list of ingredients will dynamically update based on the selected number of servings
- there will also be a link to the page of the recipe

- a user will be able to bookmark recipes
- a user will be able to create thier own recipes (will only be visible to that specific user)

## 3/8/2022:

- will focus on uploading files and initiating the project correctly and uploading to repo.

## 3/9/2022:

- will create a funcion that allows us to get a recipe from the API, reformats the data that we recieve from our AJAX call, and loads the recipe to the UI

## 3/10/2022:

- will implement event listeners for when the page loads and when a user selects a recipe from the results lists or when the page loads with a specific recipe ID (hashChange event)

- Implementing an MVC architecture to give the project structure
  -- Will need to refactor the code we currently have to implement our MVC architecture

  -- Also installed the 'fractional' library in order to list the ingredients using fractions

  -- Successfully refactored code in order to implement the MVC architecture

## 3/22/2022:

- after a short break preparing for some interviews and reviewing other course material I decided to return to working on this application.

- this date I focus on creating a config.js file for all constants thate will be reused across the project.  I will also create a helpers.js file that will contain a couple of functions that will be reused across the project.

- Implemented the Publisher-Subscriber Pattern in orde to listen and handle events in our MVC architecture. Did this in order to place everything related to the DOM inside of a View.  Event listeners should be attached to the DOM elements in the View but the events should then be handled by the controller functions that live inside of the Controller module.