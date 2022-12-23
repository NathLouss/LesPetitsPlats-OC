import { getRecipes } from './api/services.js'
import { recipeFactory } from './factory/recipeFactory.js'
import { filterFactory } from './factory/filterFactory.js'
import { filterDatas, sortDatas } from './utils/filterAlgo.js'
import { toggleDropDown } from './utils/dropdown.js'
import { initFilterList } from './utils/filter.js'
import { handleTag } from './utils/tag.js'

// déclaration variables
let datas = []
let ingredientsList = []
let appliancesList = []
let ustensilsList = []
let lists = []
let filteredDatas = []

// création et affichage des cards recette via la recipeFactory
function displayRecipes(datas) {
	sortDatas(datas)
	const recipesSection = document.getElementById('recipes')
	recipesSection.innerHTML = ''
	datas.forEach((data) => {
		let recipeModel = recipeFactory(data)
		const recipeCardDOM = recipeModel.getRecipeCardDOM()
		recipesSection.appendChild(recipeCardDOM)
	})
}

// création liste ingrédients via la recipeFactory
function createListIngredients(datas) {
	let ingredientsListBrut = []
	datas.forEach((data) => {
		let listeModel = recipeFactory(data)
		const ingredients = listeModel.getIngredients()
		ingredientsListBrut.push(...ingredients)
	})
	ingredientsListBrut.sort()
	ingredientsList = [...new Set(ingredientsListBrut)]

	return ingredientsList
}

// création liste appareils via la recipeFactory
function createListAppliances(datas) {
	let applianceListBrut = []
	datas.forEach((data) => {
		let listeModel = recipeFactory(data)
		const appliances = listeModel.getAppliances()
		applianceListBrut.push(appliances)
	})
	applianceListBrut.sort()
	appliancesList = [...new Set(applianceListBrut)]

	return appliancesList
}

// création liste ustensiles via la recipeFactory
function createListUstensils(datas) {
	let ustensilsListBrut = []
	datas.forEach((data) => {
		let listeModel = recipeFactory(data)
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

function listInit(datas) {
	createListIngredients(datas)
	createListAppliances(datas)
	createListUstensils(datas)
	groupLists()
}

//génération des listes de filtres via la filterFactory
function displayFilterList(lists) {
	// Object.values(lists).forEach((list) => {
	for (const [key, value] of Object.entries(lists)) {
		// console.log(typeof key, key)
		// console.log(typeof value, value)
		// console.log(typeof list, list)
		const ulSection = document.getElementById(`filter_list_${key}`)
		let filterListModel = filterFactory(value)
		const filterListCardDOM = filterListModel.getFilterListCardDOM()
		console.log(typeof filterListCardDOM)
		Object.values(filterListCardDOM).forEach((li) => {
			li.addEventListener('click', (e) => handleTag(e, key))
			ulSection.appendChild(li)
		})
	}
}

async function init() {
	datas = await getRecipes()
	displayRecipes(datas)
	listInit(datas)
	displayFilterList(lists)
}

init()

//------------------------------------------------------------------------------------------
// Dropdown
const triggers = document.querySelectorAll('.trigger')
triggers.forEach((trigger) => trigger.addEventListener('click', (e) => toggleDropDown(e)))

//------------------------------------------------------------------------------------------
// Filter search
const inputs = document.querySelectorAll('.filter_input')
inputs.forEach((input) => input.addEventListener('click', (e) => initFilterList(e)))

//------------------------------------------------------------------------------------------
// Event Listener
const searchBar = document.querySelector('#search_recipe')
searchBar.addEventListener('input', (e) => {
	const value = e.target.value
	const recipesSection = document.getElementById('recipes')
	if (value.length >= 3) {
		searchBar.classList.add('active')
		filteredDatas = filterDatas(e.target.value, datas)
		displayRecipes(filteredDatas)
		listInit(filteredDatas)
		displayFilterList(lists)
		if (filteredDatas.length === 0) {
			recipesSection.innerHTML = "Votre recherche n'a pas de correspondance."
			recipesSection.classList.add('empty')
		} else {
			recipesSection.classList.remove('empty')
		}
	} else {
		searchBar.classList.remove('active')
		displayRecipes(datas)
		listInit(datas)
		displayFilterList(lists)
		recipesSection.classList.remove('empty')
	}
})
