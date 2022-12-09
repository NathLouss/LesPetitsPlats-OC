let filteredDatas = [];

export function filterDatas(value, datas) {
  filteredDatas = [];
  const keyword = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (let i = 0; i < datas.length; i++) {
    const recipe = datas[i];
    const nameFormated = recipe.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const descriptionFormated = recipe.description
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const applianceFormated = recipe.appliance
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    // pour chaque recette, on va comparer le nom à l'input
    if (nameFormated.includes(keyword)) {
      const checkId = filteredDatas.some(
        (filteredData) => filteredData.id === recipe.id
      );
      if (!checkId) {
        filteredDatas.push(recipe);
      }
      // pour chaque recette, on va comparer la description à l'input
    } else if (descriptionFormated.includes(keyword)) {
      const checkId = filteredDatas.some(
        (filteredData) => filteredData.id === recipe.id
      );
      if (!checkId) {
        filteredDatas.push(recipe);
      }
      // pour chaque recette, on va comparer l'appareil à l'input
    } else if (applianceFormated.includes(keyword)) {
      const checkId = filteredDatas.some(
        (filteredData) => filteredData.id === recipe.id
      );
      if (!checkId) {
        filteredDatas.push(recipe);
      }
    } else {
      // pour chaque recette, on va comparer les ingrédients à l'input
      const ingredientsArr = recipe.ingredients;
      for (let j = 0; j < ingredientsArr.length; j++) {
        const ingredientFormated = ingredientsArr[j].ingredient
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        if (ingredientFormated.includes(keyword)) {
          const checkId = filteredDatas.some(
            (filteredData) => filteredData.id === recipe.id
          );
          if (!checkId) {
            filteredDatas.push(recipe);
          }
        }
      }
      // pour chaque recette, on va comparer les ingrédients à l'input
      const ustensilsArr = recipe.ustensils;
      for (let i = 0; i < ustensilsArr.length; i++) {
        const ustensilsFormated = ustensilsArr[i]
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        if (ustensilsFormated.includes(keyword)) {
          const checkId = filteredDatas.some(
            (filteredData) => filteredData.id === recipe.id
          );
          if (!checkId) {
            filteredDatas.push(recipe);
          }
        }
      }
    }
  }
  sortDatas(datas, `name`);
  return filteredDatas;
}

export function sortDatas(array, key) {
  for (let i = 0; i < array.length; i++) {
    const currVal = array[i][key];
    const currElem = array[i];
    let j = i - 1;
    while (j >= 0 && array[j][key] > currVal) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currElem;
  }
}
