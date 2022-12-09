let filteredDatas = [];

export function filterDatas(value, datas) {
  filteredDatas = [];
  // const { elements } = [name, ingredients, description, appliance, ustensils];
  const inputFormated = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // pour chaque recette, on va comparer le nom à l'input
  // for (let i = 0; i < datas.length; i++) {
  //   const recipe = datas[i];
  //   const elements = Object.keys(recipe);
  //   console.log(elements);
  //   for (let i = 0; i < elements.length; i++) {
  //     const key = elements[i];
  //     datas[i][key] = elements[i];
  //     // const stringToKey = {
  //     //   [keyName]: elements[i],
  //     // };
  //     console.log(datas[i].keyName);
  //     const elementFormated = datas[i].elements[i]
  //       .toLowerCase()
  //       .normalize("NFD")
  //       .replace(/[\u0300-\u036f]/g, "");
  //     if (elementFormated.includes(inputFormated)) {
  //       const checkId = filteredDatas.some(
  //         (filteredData) => filteredData.id === recipe.id
  //       );
  //       if (filteredDatas.length === 0) {
  //         filteredDatas.push(recipe);
  //       } else if (!checkId) {
  //         filteredDatas.push(recipe);
  //       }
  //     }
  //   }
  // }

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
