let filteredDatas = [];

export function filterDatas(value, datas) {
  filteredDatas.innerHTML = "";
  const inputFormated = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  filteredDatas = datas.filter(
    (data) =>
      data.name.toLowerCase().includes(inputFormated) ||
      data.appliance.toLowerCase().includes(inputFormated) ||
      data.description.toLowerCase().includes(inputFormated) ||
      data.ustensils.forEach((ustensil) =>
        ustensil.toLowerCase().includes(inputFormated)
      ) ||
      data.ingredients.forEach((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(inputFormated)
      )
  );
  return filteredDatas;
}

function sortFilterDatas(filteredDatas) {}
