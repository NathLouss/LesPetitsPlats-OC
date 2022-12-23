export function toggleDropDown(e) {
	const allList = document.querySelectorAll('.filter_list')
	debugger
	allList.forEach((list) => {
		list.style.display = 'none'
	})
	const allBtn = document.querySelectorAll('.filter_btn')
	allBtn.forEach((btn) => {
		btn.style.display = 'block'
	})
	const allInput = document.querySelectorAll('.filter_input')
	allInput.forEach((input) => {
		input.classList.remove('filter_input_active')
	})
	if (e.currentTarget.className != 'filter_close') {
		const btnClicked = document.getElementById(`filter_btn_${selectedFilter}`)
		btnClicked.style.display = 'none'
		const filterSelected = document.getElementById(`filter_by_${selectedFilter}`)
		filterSelected.style.display = 'block'
		const inputSelected = document.getElementById(`input_${selectedFilter}`)
		inputSelected.classList.add('filter_input_active')
	}
}
