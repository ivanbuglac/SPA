import '@babel/polyfill'
import '../index.html'
import '../style.css'
import SearchBar from './components/Search.js'
import PostList from './components/PostList.js'

export default class MainApp {
	constructor() {
		this.posts = []
		this.filteredPosts = []
		this.searchBar = new SearchBar(this.handleSearch.bind(this))
		this.postList = new PostList(this.filteredPosts)
		this.appContainer = document.querySelector('#app')

		this.fetchPosts()
		this.render()
	}

	async fetchPosts() {
		try {
			const response = await fetch('/post.json')
			if (!response.ok) {
				throw new Error('Ошибка при загрузке постов')
			}
			const data = await response.json()
			this.posts = data
			this.filteredPosts = data
			this.render()
		} catch (error) {
			console.error('Ошибка загрузки данных:', error)
		}
	}

	handleSearch(searchTerm) {
		const lowerCaseTerm = searchTerm.toLowerCase()
		this.filteredPosts = this.posts.filter(post =>
			post.body.toLowerCase().includes(lowerCaseTerm)
		)
		this.postList.updatePosts(this.filteredPosts)
	}

	render() {
		this.appContainer.innerHTML = `
        <div class="app-container">
            <div id="search-bar"></div>
            <div id="post-list"></div>
        </div>
    `

		const searchBarContainer = this.appContainer.querySelector('#search-bar')

		this.searchBar.render(searchBarContainer)
		this.postList.updatePosts(this.filteredPosts)
	}
}

new MainApp()
