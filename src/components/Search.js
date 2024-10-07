import { debounce } from '../helpers/debounce.js'

export default class SearchBar {
	constructor(onSearch) {
		this.onSearch = debounce(onSearch, 700)
	}

	handleInput(event) {
		const searchTerm = event.target.value
		this.onSearch(searchTerm)
	}

	render() {
		document.getElementById('search-bar').innerHTML = `
            <input type="text" id="search-input" placeholder="Поиск" />
        `
		document
			.getElementById('search-input')
			.addEventListener('input', this.handleInput.bind(this))
	}
}
