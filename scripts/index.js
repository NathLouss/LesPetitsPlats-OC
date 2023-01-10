import { getRecipes } from './api/services.js'
import { recipeFactory } from './factory/recipeFactory.js'
import { filterFactory } from './factory/filterFactory.js'
import { filterRecipes, sortRecipes } from './utils/filterAlgo.js'
import { toggleDropDown } from './utils/dropdown.js'
// import { initFilterList } from './utils/filter.js'
import { createTag } from './utils/tag.js'

// déclaration variables
let recipes = []
let ingredientsList = []
let appliancesList = []
let ustensilsList = []
let lists = []
let filteredRecipes = []
let listsWithoutKeyword = []
let keywordList = []
const form = document.querySelector('form')

// création et affichage des cards recette via la recipeFactory
function displayRecipes(recipes) {
	sortRecipes(recipes)
	const recipesSection = document.getElementById('recipes')
	recipesSection.innerHTML = ''
	recipes.forEach((recipe) => {
		let recipeModel = recipeFactory(recipe)
		const recipeCardDOM = recipeModel.getRecipeCardDOM()
		recipesSection.appendChild(recipeCardDOM)
	})
}

// création liste ingrédients via la recipeFactory
function createListIngredients(recipes) {
	let ingredientsListBrut = []
	recipes.forEach((recipe) => {
		let listeModel = recipeFactory(recipe)
		const ingredients = listeModel.getIngredients()
		ingredientsListBrut.push(...ingredients)
	})
	ingredientsListBrut.sort()
	ingredientsList = [...new Set(ingredientsListBrut)]

	return ingredientsList
}

// création liste appareils via la recipeFactory
function createListAppliances(recipes) {
	let applianceListBrut = []
	recipes.forEach((recipe) => {
		let listeModel = recipeFactory(recipe)
		const appliances = listeModel.getAppliances()
		applianceListBrut.push(appliances)
	})
	applianceListBrut.sort()
	appliancesList = [...new Set(applianceListBrut)]

	return appliancesList
}

// création liste ustensiles via la recipeFactory
function createListUstensils(recipes) {
	let ustensilsListBrut = []
	recipes.forEach((recipe) => {
		let listeModel = recipeFactory(recipe)
		const ustensils = listeModel.getUstensiles()
		ustensilsListBrut.push(...ustensils)
	})
	ustensilsListBrut.sort()
	ustensilsList = [...new Set(ustensilsListBrut)]

	return ustensilsList
}

function groupLists() {
	lists = {
		ingredient: ingredientsList,
		appliance: appliancesList,
		ustensil: ustensilsList,
	}
}

function listInit(recipes) {
	createListIngredients(recipes)
	createListAppliances(recipes)
	createListUstensils(recipes)
	groupLists()
}

//génération des listes de filtres via la filterFactory
// function displayFilterList(lists, keyword = null, source = null) {
// 	for (const [key, value] of Object.entries(lists)) {
// 		const ulSection = document.getElementById(`filter_list_${key}`)
// 		ulSection.innerHTML = ''
// 		// debugger
// 		if (keyword) {
// 			// si argument keyword transmis (input)
// 			if (source) {
// 				// si source filtre
// 				const keywordFormated = keyword
// 					.toLowerCase()
// 					.normalize('NFD')
// 					.replace(/[\u0300-\u036f]/g, '')
// 				//filtre les listes en gardant la valeur saisie
// 				const newValuesList = Object.values(value).filter((elt) => {
// 					const eltFormated = elt
// 						.toLowerCase()
// 						.normalize('NFD')
// 						.replace(/[\u0300-\u036f]/g, '')
// 					return eltFormated.includes(keywordFormated)
// 				})
// 				//envoi la nouvelle liste de filtre à la filterFactory pour les générer et afficher
// 				let filterListModel = filterFactory(newValuesList)
// 				const filterListCardDOM = filterListModel.getFilterListCardDOM()
// 				Object.values(filterListCardDOM).forEach((li) => {
// 					li.addEventListener('click', (e) => createTag(e, key))
// 					ulSection.appendChild(li)
// 				})
// 			} else {
// 				// si argument keyword transmis (input)
// 				const keywordFormated = keyword
// 					.toLowerCase()
// 					.normalize('NFD')
// 					.replace(/[\u0300-\u036f]/g, '')
// 				//filtre les listes en enlevant la valeur saisie
// 				const newValuesList = Object.values(value).filter((elt) => {
// 					const eltFormated = elt
// 						.toLowerCase()
// 						.normalize('NFD')
// 						.replace(/[\u0300-\u036f]/g, '')
// 					return !eltFormated.includes(keywordFormated)
// 				})
// 				//envoi la nouvelle liste de filtre à la filterFactory pour les générer et afficher
// 				let filterListModel = filterFactory(newValuesList)
// 				const filterListCardDOM = filterListModel.getFilterListCardDOM()
// 				Object.values(filterListCardDOM).forEach((li) => {
// 					li.addEventListener('click', (e) => createTag(e, key))
// 					ulSection.appendChild(li)
// 				})
// 			}
// 		} else {
// 			// si pas argument keyword transmis (input)
// 			//envoi la nouvelle liste de filtre à la filterFactory pour les générer et afficher
// 			let filterListModel = filterFactory(value)
// 			const filterListCardDOM = filterListModel.getFilterListCardDOM()
// 			Object.values(filterListCardDOM).forEach((li) => {
// 				li.addEventListener('click', (e) => {
// 					createTag(e, key)
// 					filteredRecipes = filterRecipes(e.target.value, recipes)
// 					displayRecipes(filteredRecipes)
// 					listInit(filteredRecipes)
// 					displayFilterList(lists, value, sourceValue)
// 				})
// 				ulSection.appendChild(li)
// 			})
// 		}
// 	}
// }

//génération des listes de filtres via la filterFactory
function displayFilterList(lists, keyword = null) {
	// pour chaque filtre Ing, App, Usten
	for (const [filterName, filterList] of Object.entries(lists)) {
		const ulSection = document.getElementById(`filter_list_${filterName}`)
		ulSection.innerHTML = ''
		// si pas de recherche
		if (!keyword) {
			// initialisation
			// on génère la liste html via la filterFactory
			let filterListModel = filterFactory(filterList)
			const filterListCardDOM = filterListModel.getFilterListCardDOM()
			// on postionne un eventlistener sur chaque option de filtre li
			Object.values(filterListCardDOM).forEach((li) => {
				li.addEventListener('click', (e) => {
					createTag(e, filterName)
				})
				ulSection.appendChild(li)
			})
		} else {
			// si recherche saisie // dans searchbar principale
			const keywordFormated = keyword
				.toLowerCase()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '')
			//filtre les listes en enlevant la valeur saisie
			const newValuesList = Object.values(filterList).filter((elt) => {
				const eltFormated = elt
					.toLowerCase()
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
				return !eltFormated.includes(keywordFormated)
			})
			// on génère la liste html via la filterFactory
			let filterListModel = filterFactory(newValuesList)
			const filterListCardDOM = filterListModel.getFilterListCardDOM()
			// on postionne un eventlistener sur chaque option de filtre li
			Object.values(filterListCardDOM).forEach((li) => {
				li.addEventListener('click', (e) => {
					createTag(e, filterName)
				})
				ulSection.appendChild(li)
			})
		}
	}
}

async function init() {
	recipes = await getRecipes()
	displayRecipes(recipes)
	listInit(recipes)
	displayFilterList(lists)
}

init()

//------------------------------------------------------------------------------------------
// Dropdown
const triggers = document.querySelectorAll('.trigger')
triggers.forEach((trigger) => trigger.addEventListener('click', (e) => toggleDropDown(e)))

//------------------------------------------------------------------------------------------
// Barre de recherche principale
const searchBar = document.querySelector('#search_recipe')
const recipesSection = document.getElementById('recipes')
const cross = document.querySelector('.search_btn_cross')

searchBar.addEventListener('input', (e) => {
	const value = e.target.value
	const recipesLength = document.querySelector('.search_recipe_number')

	if (value.length >= 3) {
		initResetInput()
		searchBar.classList.add('active')
		// filtre les recettes avec la value de l'input
		filteredRecipes = filterRecipes(e.target.value, recipes)
		// affiche le nombre de recettes filtrées
		recipesLength.textContent = filteredRecipes.length
		// affiche les recettes filtrées
		displayRecipes(filteredRecipes)
		// réinitialise les listes ingr, app, ustens avec les recettes filtrées
		listInit(filteredRecipes)

		//filtre les listes en enlevant la valeur saisie
		// removeKeywordFromList(lists, value)

		// affiche les listes des recettes filtrées
		displayFilterList(lists, value)

		if (filteredRecipes.length === 0) {
			recipesSection.innerHTML = "Votre recherche n'a pas de correspondance."
			recipesSection.classList.add('empty')
		} else {
			recipesSection.classList.remove('empty')
		}
	} else {
		init()
		searchBar.classList.remove('active')
		recipesSection.classList.remove('empty')
		cross.style.display = 'none'
		document.querySelector('.search_recipe_number').textContent = '50'
	}
})

//filtre les listes en enlevant la valeur saisie
// function removeKeywordFromList(lists, keyword) {
// 	// pour chaque filtre Ing, App, Usten
// 	for (const [filterName, filterList] of Object.entries(lists)) {
// 		// Object.values(lists).forEach((list) => {
// 		console.log(filterName, filterList)
// 		const keywordFormated = keyword
// 			.toLowerCase()
// 			.normalize('NFD')
// 			.replace(/[\u0300-\u036f]/g, '')
// 		filterList.filter((elt) => {
// 			const eltFormated = elt
// 				.toLowerCase()
// 				.normalize('NFD')
// 				.replace(/[\u0300-\u036f]/g, '')
// 			//filtre les listes en enlevant la valeur saisie
// 			return !eltFormated.includes(keywordFormated)
// 		})
// 		debugger
// 	}
// 	console.log(lists)
// }

// gestion du reset de la barre de recherche
function initResetInput() {
	cross.style.display = 'block'
	cross.addEventListener('click', () => {
		form.reset()
		searchBar.classList.remove('active')
		cross.style.display = 'none'
		init()
		searchBar.classList.remove('active')
		recipesSection.classList.remove('empty')
		document.querySelector('.search_recipe_number').textContent = '50'
	})
}

//------------------------------------------------------------------------------------------
// Filtres de tri
const inputsFilter = document.querySelectorAll('.filter_input')
// inputs.forEach((input) => input.addEventListener('input', (e) => initFilterList(e)))
// inputs.forEach((input) =>
// 	input.addEventListener('input', (e) => {
// 		const value = e.target.value
// 		const sourceValue = e.target.classList.value
// 		console.log(sourceValue)
// 		// const inputSearchBar = document.getElementById('search_recipe')
// 		if (value.length >= 3) {
// 			// if (inputSearchBar.className === 'active') {
// 			// 	const searchValue = inputSearchBar.value
// 			// 	const newValue = optionArray.filter((option) => !option.toString().includes(searchValue))
// 			// filteredRecipes = filterRecipes(e.target.value, recipes)
// 			// displayRecipes(filteredRecipes)
// 			// listInit(filteredRecipes)
// 			displayFilterList(lists, value, sourceValue)
// 			// } else {
// 			// }
// 		} else {
// 			// displayRecipes(recipes)
// 			// listInit(recipes)
// 			// displayFilterList(lists)
// 			init()
// 		}
// 	})
// )

inputsFilter.forEach((input) =>
	input.addEventListener('input', (e) => {
		const filterValue = e.target.value
		// si searchbar principale active
		if (searchBar.value !== '') {
			console.log('active')
			// envoi à fonction de tri et d'affichage
			// les recettes filtrées par la SearchBar et la valeur de l'input
		} else {
			if (filterValue.length >= 3) {
				// si pas de saisie dans searchbar
				// récupère les li existants
				const ulSection = document.getElementById(`filter_list_${e.target.dataset.property}`)
				const liSectionList = ulSection.childNodes
				const keywordFormated = filterValue
					.toLowerCase()
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
				// filtre les li en gardant ceux qui contiennent la même valeur que le filtre saisi
				const newFilterList = []
				Object.values(liSectionList).filter((li) => {
					const eltFormated = li.innerHTML
						.toLowerCase()
						.normalize('NFD')
						.replace(/[\u0300-\u036f]/g, '')
					if (eltFormated.includes(keywordFormated)) {
						newFilterList.push(eltFormated)
					}
				})
				// on génère la liste html
				ulSection.innerHTML = ''
				newFilterList.forEach((elt) => {
					const liFilter = document.createElement('li')
					liFilter.classList.add('filter_li')
					const eltFormated = (elt + '').charAt(0).toUpperCase() + elt.substr(1)
					liFilter.textContent = eltFormated
					// on postionne un eventlistener sur chaque option de filtre li
					liFilter.addEventListener('click', (e) => {
						createTag(e, e.target.dataset.property)
					})
					ulSection.appendChild(liFilter)
				})
			} else {
				console.log('saisie trop courte')
				// initialise la liste des elts avec toutes les recettes
				init()
			}
		}
	})
)
