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

  // pour chaque recette, on va comparer son nom à l'input
  for (let i = 0; i < datas.length; i++) {
    const nameFormated = datas[i].name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    // const regex = new RegExp(inputFormated);
    // si l'input match avec un mot du nom de la recette
    // if (regex.test(nameFormated)) {
    if (nameFormated.includes(inputFormated)) {
      const matchingRecipe = datas[i];
      // si le tableau filteredDatas est vide
      if (filteredDatas.length === 0) {
        // la matching recette est envoyée dans le tableau filteredDatas
        filteredDatas.push(matchingRecipe);
        // sinon
      } else {
        // on va itérer sur chaque élément du tableau
        // for (let i = 0; i < filteredDatas.length; i++) {
        // si la matching recette est différente de celle présente dans filteredDatas
        // if (!(matchingRecipe.name === filteredDatas[i].name)) {
        if (!(filteredDatas.indexOf(matchingRecipe.name) !== -1)) {
          // la matching recette est envoyée dans le tableau filteredDatas
          filteredDatas.push(matchingRecipe);
        }
        // }
      }
    }
  }
  for (let i = 0; i < datas.length; i++) {
    const nameFormated = datas[i].description
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    // const regex = new RegExp(inputFormated);
    // si l'input match avec un mot du nom de la recette
    // if (regex.test(nameFormated)) {
    if (nameFormated.includes(inputFormated)) {
      const matchingRecipe = datas[i];
      // si le tableau filteredDatas est vide
      if (filteredDatas.length === 0) {
        // la matching recette est envoyée dans le tableau filteredDatas
        filteredDatas.push(matchingRecipe);
        // sinon
      } else {
        // on va itérer sur chaque élément du tableau
        // for (let i = 0; i < filteredDatas.length; i++) {
        // si la matching recette est différente de celle présente dans filteredDatas
        // if (!(matchingRecipe.name === filteredDatas[i].name)) {
        if (!(filteredDatas.indexOf(matchingRecipe.name) !== -1)) {
          // la matching recette est envoyée dans le tableau filteredDatas
          filteredDatas.push(matchingRecipe);
        }
        // }
      }
    }
    // for (let i = 0; i < datas.length; i++) {
    //   const nameFormated = datas[i].appliance
    //     .toLowerCase()
    //     .normalize("NFD")
    //     .replace(/[\u0300-\u036f]/g, "");
    //   // const regex = new RegExp(inputFormated);
    //   // si l'input match avec un mot du nom de la recette
    //   // if (regex.test(nameFormated)) {
    //   if (nameFormated.includes(inputFormated)) {
    //     const matchingRecipe = datas[i];
    //     // si le tableau filteredDatas est vide
    //     if (filteredDatas.length === 0) {
    //       // la matching recette est envoyée dans le tableau filteredDatas
    //       filteredDatas.push(matchingRecipe);
    //       // sinon
    //     } else {
    //       // on va itérer sur chaque élément du tableau
    //       // for (let i = 0; i < filteredDatas.length; i++) {
    //       // si la matching recette est différente de celle présente dans filteredDatas
    //       // if (!(matchingRecipe.name === filteredDatas[i].name)) {
    //       if (!(filteredDatas.indexOf(matchingRecipe.name) !== -1)) {
    //         // la matching recette est envoyée dans le tableau filteredDatas
    //         filteredDatas.push(matchingRecipe);
    //       }
    //       // }
    //     }
    //   }
    // }
  }
  console.log(filteredDatas);
}
