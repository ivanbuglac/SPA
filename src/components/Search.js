import { debounce } from '../helpers/debounce.js'

export default class SearchBar {
	constructor(onSearch) {
		this.onSearch = debounce(onSearch, 700)
	}

	handleInput(event) {
		const searchTerm = event.target.value
		this.onSearch(searchTerm)
	}

	render(container) {
		container.innerHTML = `
            <input type="text" id="search-input" placeholder="Поиск" />
        `
		const searchInput = container.querySelector('#search-input')
		searchInput.addEventListener('input', this.handleInput.bind(this))
	}
}
