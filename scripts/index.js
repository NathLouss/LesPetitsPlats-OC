import { getRecipes } from "./api/services.js";
import { recipeFactory } from "./factory/recipeFactory.js";
import { filterFactory } from "./factory/filterFactory.js";
import { searchRecipe } from "./utils/searchBar.js";

// création et affichage des cards recette via la recipeFactory
function displayRecipes(datas) {
  const recipesSection = document.getElementById("recipes");

  datas.forEach((data) => {
    let recipeModel = recipeFactory(data);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesSection.appendChild(recipeCardDOM);
  });
}

const filterOptions = ["Ingrédients", "Appareils", "Ustensiles"];
//création et affichage des filtres via la filterFactory
function displayFilter(filterOptions) {
  const filtersSection = document.getElementById("filters");

  filterOptions.forEach((option) => {
    let filterModel = filterFactory(option);
    const filterCardDOM = filterModel.getFilterCardDOM();
    filtersSection.appendChild(filterCardDOM);
  });
}

let ingredientsList = [];
// création liste ingrédients via la recipeFactory
function createListIngredients(datas) {
  let ingredientsListBrut = [];
  datas.forEach((data) => {
    let listeModel = recipeFactory(data);
    const ingredients = listeModel.getIngredientsList();
    ingredientsListBrut.push(...ingredients);
  });
  ingredientsListBrut.sort();
  ingredientsList = [...new Set(ingredientsListBrut)];
  console.log(ingredientsList);
}

async function init() {
  const datas = await getRecipes();
  displayRecipes(datas);
  displayFilter(filterOptions);
  createListIngredients(datas);
}

init();

//------------------------------------------------------------------------------------------
// Event Listener
const searchBar = document.querySelector("#search_recipe");
searchBar.addEventListener("keyup", (e) => {
  const value = e.target.value;
  const regex = /[A-Za-z0-9]{3,}/;
  if (regex.test(value)) {
    searchRecipe(value);
  }
});

//------------------------------------------------------------------------------------------
// manipule 4 listes : recettes, ingrédients, appareils, ustensiles
// 4 arrays
// selon les filtres on va reconstruire ces tableaux
// ces tableaux seront envoyés aux fonctions qui affiche les recettes, le contenu du filtre
// array.filter reconstruit le tableau
// return operation ternaire

// boucle en 1er
// loqigue tri : dans un nvo tableau prend la 1ere variable et une seconde
