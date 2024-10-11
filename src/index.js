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

		this.appContainer.classList.add('app-container')

		this.searchBarContainer = document.createElement('div')
		this.postListContainer = document.createElement('div')

		this.searchBarContainer.id = 'search-bar'
		this.postListContainer.id = 'post-list'

		this.appContainer.appendChild(this.searchBarContainer)
		this.appContainer.appendChild(this.postListContainer)

		this.fetchPosts()
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
		this.postList.updatePosts(this.filteredPosts, this.postListContainer)
	}

	render() {
		this.searchBar.render(this.searchBarContainer)
		this.postList.updatePosts(this.filteredPosts, this.postListContainer)
	}
}

new MainApp()
