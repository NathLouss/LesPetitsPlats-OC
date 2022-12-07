let filteredDatas = [];

export function filterDatas(value, datas) {
  console.log(datas);
  const inputFormated = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  filteredDatas = [];

  // debugger;
  // const keys = Object.keys(datas[i]);
  // console.log(keys);
  // for (const key in keys) {
  // }

  // pour chaque recette, on va comparer le nom à l'input
  // for (let i = 0; i < datas.length; i++) {
  //   const nameFormated = datas[i].name
  //     .toLowerCase()
  //     .normalize("NFD")
  //     .replace(/[\u0300-\u036f]/g, "");
  //   // si l'input match avec un mot du nom de la recette
  //   if (nameFormated.includes(inputFormated)) {
  //     const matchingRecipe = datas[i];
  //     // si le tableau filteredDatas est vide
  //     if (filteredDatas.length === 0) {
  //       // la matching recette est envoyée dans le tableau filteredDatas
  //       filteredDatas.push(matchingRecipe);
  //       // sinon si la matching recette est différente de celle présente dans filteredDatas
  //     } else if (!(filteredDatas.indexOf(matchingRecipe.name) !== -1)) {
  //       // la matching recette est envoyée dans le tableau filteredDatas
  //       filteredDatas.push(matchingRecipe);
  //     }
  //   }
  // }
  // pour chaque recette, on va comparer la description à l'input
  // for (let i = 0; i < datas.length; i++) {
  //   const descriptionFormated = datas[i].description
  //     .toLowerCase()
  //     .normalize("NFD")
  //     .replace(/[\u0300-\u036f]/g, "");
  //   if (descriptionFormated.includes(inputFormated)) {
  //     const matchingRecipe = datas[i];
  //     if (filteredDatas.length === 0) {
  //       filteredDatas.push(matchingRecipe);
  //     } else if (!(filteredDatas.indexOf(matchingRecipe.name) !== -1)) {
  //       filteredDatas.push(matchingRecipe);
  //     }
  //   }
  // }
  // pour chaque recette, on va comparer l'appareil à l'input
  // for (let i = 0; i < datas.length; i++) {
  //   const applianceFormated = datas[i].appliance
  //     .toLowerCase()
  //     .normalize("NFD")
  //     .replace(/[\u0300-\u036f]/g, "");
  //   if (applianceFormated.includes(inputFormated)) {
  //     const matchingRecipe = datas[i];
  //     if (filteredDatas.length === 0) {
  //       filteredDatas.push(matchingRecipe);
  //     } else if (!(filteredDatas.indexOf(matchingRecipe.name) !== -1)) {
  //       filteredDatas.push(matchingRecipe);
  //     }
  //   }
  // }
  // pour chaque recette, on va récupérer les ingrédients
  // for (let i = 0; i < datas.length; i++) {
  //   const ingredientsArr = datas[i].ingredients;
  //   // pour chaque recette, on va comparer les ingrédients à l'input
  //   for (let i = 0; i < ingredientsArr.length; i++) {
  //     const ingredientFormated = ingredientsArr[i].ingredient
  //       .toLowerCase()
  //       .normalize("NFD")
  //       .replace(/[\u0300-\u036f]/g, "");
  //     if (ingredientFormated.includes(inputFormated)) {
  //       const matchingRecipe = datas[i];
  //       if (filteredDatas.length === 0) {
  //         filteredDatas.push(matchingRecipe);
  //       } else if (!(filteredDatas.indexOf(matchingRecipe.name) !== -1)) {
  //         filteredDatas.push(matchingRecipe);
  //       }
  //     }
  //   }
  // }
  // pour chaque recette, on va récupérer les ustensiles
  for (let i = 0; i < datas.length; i++) {
    const ustensilsArr = datas[i].ustensils;
    // pour chaque recette, on va comparer les ingrédients à l'input
    for (let i = 0; i < ustensilsArr.length; i++) {
      const ustensilsFormated = ustensilsArr[i]
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (ustensilsFormated.includes(inputFormated)) {
        const matchingRecipe = datas[i];
        if (filteredDatas.length === 0) {
          filteredDatas.push(matchingRecipe);
        } else if (!(filteredDatas.indexOf(matchingRecipe.name) !== -1)) {
          filteredDatas.push(matchingRecipe);
        }
      }
    }
  }
  console.log(filteredDatas);
}
