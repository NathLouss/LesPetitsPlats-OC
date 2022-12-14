export function handleTag(e, selectedFilter) {
	console.log('coucou')
	createTag(e, selectedFilter)
}

function createTag(e, selectedFilter) {
	const filterTag = document.getElementById('filters_tags')
	filterTag.classList.add('filters_tags_active')

	const tagDiv = document.createElement('div')
	tagDiv.classList.add('filter_tag_div')
	tagDiv.classList.add(`color_tag_${selectedFilter}`)
	filterTag.appendChild(tagDiv)

	const tag = document.createElement('p')
	tag.classList.add('filter_tag_p')
	tag.textContent = e
	tagDiv.appendChild(tag)

	const tagIcon = document.createElement('i')
	tagIcon.classList.add('far', 'fa-times-circle')
	tagIcon.addEventListener('click', (e) => deleteTag(e))
	tagDiv.appendChild(tagIcon)

	const filterInput = document.getElementById(`input_${selectedFilter}`)
	filterInput.value = ''
	const filterList = document.getElementById(`filter_by_${selectedFilter}`)
	filterList.style.display = 'none'
	const filterButton = document.getElementById(`filter_btn_${selectedFilter}`)
	filterButton.style.display = 'block'
}

function deleteTag(e) {
	e.target.parentElement.remove()
	const tagDiv = document.getElementById('filters_tags')
	if (tagDiv.innerHTML === '') {
		tagDiv.classList.remove('filters_tags_active')
	}
}

// export function filterByTag(e) {
//   createTag(e.target.innerText);
//   filledListFilter();
// }

// function handleTag() {
//   filterByTag(e);
//   filterDatas(e.target.innerText, datas);
// }

// function handleTag(e) {
// 	const inputSearchBar = document.getElementById('search_recipe')
// 	//   const tagSection = document.querySelector(".filters_tags_active");
// 	const tag = e.target.innerText
// 	createTag(tag)
// 	if (inputSearchBar.className === 'active') {
// 		filterDatas(tag, filteredDatas)
// 		displayRecipe(fileredDatasWithTag)
// 		filledListFilter(fileredDatasWithTag)
// 	}
// 	//   } else if (inputSearchBar.className === "active" && tagSection) {
// 	//     filterDatas(tag, filteredDatas);
// 	//   } else {
// 	//     filterDatas(tag, filteredDatas);
// 	//   }
// }

// const tagSection = document.querySelector(".filters_tags_active");
// if (tagSection) {
//   const tags = document.querySelectorAll(".filter_tag_p");
//   let tagList = [];
//   const tagContent = tags.forEach((tag) => tagList.push(tag.textContent));
//   debugger;
//   const newOptionArray = optionArray.filter(
//     (option) => !option.toString().includes(searchValue)
//   );
//   console.log(newOptionArray);
//   liSection.innerHTML = "";
//   newOptionArray.forEach((elt) => {
//     const liFilter = document.createElement("li");
//     liFilter.classList.add("filter_li");
//     const eltFormated = majFirstLetter(elt);
//     liFilter.textContent = eltFormated;
//     liFilter.addEventListener("click", (e) => handleTag(e));
//     liSection.appendChild(liFilter);
//   });

// quand on s??lectionne/clique sur filtre
// on cr???? un tag html
// createTag();
// //**s'il y a d??j?? eu une recherche dans la searchbar **/
// // que searchbar est active
// searchbar.className == "active";
// // on va filtrer les filteredDatas avec le keywordTag
// filterDatas(tag, filteredDatas);
// // puis displayRecipe avec fileredDatasWithTag qui sont le return filteredDatas
// displayRecipe(fileredDatasWithTag);
// // on va filledListFilter avec filteredDataWithTag
// filledListFilter(fileredDatasWithTag);
// // si on s??lectionne/clique sur autre filtre
// // on cr???? un tag html
// createTag();
// // on va filtrer les filteredDataWithTag avec le keywordTag
// filterDatas(tag, fileredDatasWithTag);
// // puis displayRecipe avec fileredDatasWithTag qui sont le return filteredDatas
// displayRecipe(fileredDatasWithTag);
// // etc...
// // si on delete un tag

// //** s'il n'y a pas eu de recherche dans la searchbar */
// // que filteredDatas est vide
// filteredDatas === empty;
// // on va filtrer les datas avec le keywordTag
// filterDatas(tag, datas);
// // puis displayRecipe avec fileredDatasWithTag qui sont le return filteredDatas
// displayRecipe(fileredDatasWithTag);
// // si on s??lectionne/clique sur autre filtre
// // on cr???? un tag html
// createTag();
// // on va filtrer les filteredDataWithTag avec le keywordTag qui sont le return filteredDatas
// filterDatas(tag, fileredDatasWithTag);
// // puis displayRecipe avec fileredDatasWithTag qui sont le return filteredDatas
// displayRecipe(fileredDatasWithTag);
// // etc...
// // si on d??s??lectionne/clique un filtre
// // on delete un tag html
// deleteTag();
// // si input searchbar
// console.log(
//   "Veuillez d??selectionner le/les filtre(s) pour saisir une recherche"
// );
