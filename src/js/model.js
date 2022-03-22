import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  //AJAX Call to our API
  try{
      const data = await getJSON(`${API_URL}/${id}`);

      //if the response doesn't fail make sure we reformat the data:
      let { recipe } = data.data;
      state.recipe = {
          id: recipe.id,
          title: recipe.title,
          publisher: recipe.publisher,
          sourceURL: recipe.source_url,
          image: recipe.image_url,
          servings: recipe.servings,
          cookingTime: recipe.cooking_time,
          ingredients: recipe.ingredients,
        };
        
    } catch (err){
        console.log(`${err} - Temporary Error Handling`);
    
    }
  console.log(state.recipe);
};
