let filteredDatas = [];

export function filterDatas(value, datas) {
  filteredDatas = [];
  const keyword = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // pour chaque recette, on va comparer le nom à l'input
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
    // si l'input match avec un mot du nom de la recette
    if (nameFormated.includes(keyword)) {
      // on définit une variable pour vérifier si une autre recette
      // est déjà présente dans filteredDatas avec le même Id
      const checkId = filteredDatas.some(
        (filteredData) => filteredData.id === recipe.id
      );
      // si la recette n'est pas présente dans filteredDatas
      if (!checkId) {
        // la recette est envoyée dans le tableau filteredDatas
        filteredDatas.push(recipe);
      }
    } else if (descriptionFormated.includes(keyword)) {
      const checkId = filteredDatas.some(
        (filteredData) => filteredData.id === recipe.id
      );
      if (!checkId) {
        filteredDatas.push(recipe);
      }
    } else if (applianceFormated.includes(keyword)) {
      const checkId = filteredDatas.some(
        (filteredData) => filteredData.id === recipe.id
      );
      if (!checkId) {
        filteredDatas.push(recipe);
      }
    } else {
      const ingredientsArr = recipe.ingredients;
      // pour chaque recette, on va comparer les ingrédients à l'input
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
      const ustensilsArr = recipe.ustensils;
      // pour chaque recette, on va comparer les ingrédients à l'input
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

  // sortDatas(datas, `name`);
  return filteredDatas;
}

// function sortDatas(array, key) {
//   console.log(key);
//   for (let i = 0; i < array.length; i++) {
//     const currVal = array[i][key];
//     const currElem = array[i];
//     const j = i - 1;
//     while (j >= 0 && array[j][key] > currVal) {
//       array[j + 1] = array[j];
//       // j–;
//     }
//     array[j + 1] = currElem;
//   }
// }

// function dynamicSort(property) {
//   var sortOrder = 1;
//   if (property[0] === "-") {
//     sortOrder = -1;
//     property = property.substr(1);
//   }
//   return function (a, b) {
//     /* next line works with strings and numbers,
//      * and you may want to customize it to your needs
//      */
//     var result =
//       a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
//     return result * sortOrder;
//   };
// }

// var items = [5,3,7,6,2,9];
// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]
