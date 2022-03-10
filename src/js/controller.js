import 'core-js/stable';
import 'regenerator-runtime/runtime';
import icons from 'url:../img/icons.svg';
import * as model from './model.js';
import recipeView from './views/recipeView.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
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
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

//create Event listeners
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
//DRY Code - can have these event listeners created at the same time:
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipe)
);
