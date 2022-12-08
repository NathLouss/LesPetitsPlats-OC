let filteredDatas = [];

export function filterDatas(value, datas) {
  filteredDatas = [];
  const inputFormated = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // pour chaque recette, on va comparer le nom à l'input
  for (let i = 0; i < datas.length; i++) {
    const recipe = datas[i];
    const nameFormated = datas[i].name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    // si l'input match avec un mot du nom de la recette
    if (nameFormated.includes(inputFormated)) {
      // on définit une variable pour vérifier si une autre recette
      // est déjà présente dans filteredDatas avec le même Id
      const checkId = filteredDatas.some(
        (filteredData) => filteredData.id === recipe.id
      );
      // si le tableau filteredDatas est vide
      if (filteredDatas.length === 0) {
        // la recette est envoyée dans le tableau filteredDatas
        filteredDatas.push(recipe);
        // sinon, si la recette n'est pas présente dans filteredDatas
      } else if (!checkId) {
        // la recette est envoyée dans le tableau filteredDatas
        filteredDatas.push(recipe);
      }
    }
  }
  // pour chaque recette, on va comparer la description à l'input
  for (let i = 0; i < datas.length; i++) {
    const recipe = datas[i];
    const descriptionFormated = datas[i].description
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    if (descriptionFormated.includes(inputFormated)) {
      const checkId = filteredDatas.some(
        (filteredData) => filteredData.id === recipe.id
      );
      if (filteredDatas.length === 0) {
        filteredDatas.push(recipe);
      } else if (!checkId) {
        filteredDatas.push(recipe);
      }
    }
  }
  // pour chaque recette, on va comparer l'appareil à l'input
  for (let i = 0; i < datas.length; i++) {
    const recipe = datas[i];
    const applianceFormated = datas[i].appliance
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    if (applianceFormated.includes(inputFormated)) {
      const checkId = filteredDatas.some(
        (filteredData) => filteredData.id === recipe.id
      );
      if (filteredDatas.length === 0) {
        filteredDatas.push(recipe);
      } else if (!checkId) {
        filteredDatas.push(recipe);
      }
    }
  }
  // pour chaque recette, on va récupérer les ingrédients
  for (let i = 0; i < datas.length; i++) {
    const recipe = datas[i];
    const ingredientsArr = datas[i].ingredients;
    // pour chaque recette, on va comparer les ingrédients à l'input
    for (let i = 0; i < ingredientsArr.length; i++) {
      const ingredientFormated = ingredientsArr[i].ingredient
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (ingredientFormated.includes(inputFormated)) {
        const checkId = filteredDatas.some(
          (filteredData) => filteredData.id === recipe.id
        );
        if (filteredDatas.length === 0) {
          filteredDatas.push(recipe);
        } else if (!checkId) {
          filteredDatas.push(recipe);
        }
      }
    }
  }
  // pour chaque recette, on va récupérer les ustensiles
  for (let i = 0; i < datas.length; i++) {
    const recipe = datas[i];
    const ustensilsArr = datas[i].ustensils;
    // pour chaque recette, on va comparer les ingrédients à l'input
    for (let i = 0; i < ustensilsArr.length; i++) {
      const ustensilsFormated = ustensilsArr[i]
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (ustensilsFormated.includes(inputFormated)) {
        const checkId = filteredDatas.some(
          (filteredData) => filteredData.id === recipe.id
        );
        if (filteredDatas.length === 0) {
          filteredDatas.push(recipe);
        } else if (!checkId) {
          filteredDatas.push(recipe);
        }
      }
    }
  }
  // console.log(filteredDatas);
  return filteredDatas;
}

// } else if (!(filteredDatas.indexOf(recipe.id) !== -1)) {
//   console.log(filteredDatas.indexOf(recipe.id));
//   filteredDatas.push(recipe);
// }
