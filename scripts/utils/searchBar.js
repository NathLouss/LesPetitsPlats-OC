let filteredDatas = [];

export function searchRecipe(value, datas) {
  // pour chaque recette, on va comparer son nom à l'input
  for (let i = 0; i < datas.length; i++) {
    const nameFormated = datas[i].name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const inputFormated = value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const regex = new RegExp(inputFormated);
    // si l'input match avec un mot du nom de la recette
    if (regex.test(nameFormated)) {
      const matchingRecipe = datas[i];
      // si le tableau filteredDatas est vide
      if (filteredDatas.length === 0) {
        // la matching recette est envoyée dans le tableau filteredDatas
        filteredDatas.push(matchingRecipe);
        // sinon
      } else {
        // on va itérer sur chaque élément du tableau
        for (let i = 0; i < filteredDatas.length; i++) {
          console.log(!(matchingRecipe.name === filteredDatas[i].name));
          // si la matching recette est différente de celle présente dans filteredDatas
          if (!(matchingRecipe.name === filteredDatas[i].name)) {
            // la matching recette est envoyée dans le tableau filteredDatas
            filteredDatas.push(matchingRecipe);
            console.log(filteredDatas);
          }
        }
      }
    }
  }
}
