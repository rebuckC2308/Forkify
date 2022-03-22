import 'core-js/stable';
import 'regenerator-runtime/runtime';
import icons from 'url:../img/icons.svg';
import * as model from './model.js';
import recipeView from './views/recipeView.js';

// https://forkify-api.herokuapp.com/v2

const controlRecipe = async function () {
  try {
    //getting the ID of the recipe from the hash in order to call it in this fx
    const id = window.location.hash.slice(1);
    //guard clause in case there is no hash in the URL
    if (!id) return;

    await model.loadRecipe(id);
    const { recipe } = model.state;

    recipeView.renderSpinner();

    //this method will accept 'model.state.recipe' data and store it in the object
    recipeView.render(recipe);
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipe)
);
