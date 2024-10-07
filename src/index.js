import '@babel/polyfill'
import '../index.html'
import '../style.css'
import SearchBar from './components/Search.js'
import PostList from './components/PostList.js'
import posts from './data/info.js'

export default class MainApp {
	constructor() {
		this.posts = posts
		this.filteredPosts = posts
		this.searchBar = new SearchBar(this.handleSearch.bind(this))
		this.postList = new PostList(this.filteredPosts)

		this.render()
	}

	handleSearch(searchTerm) {
		const lowerCaseTerm = searchTerm.toLowerCase()
		this.filteredPosts = this.posts.filter(post =>
			post.body.toLowerCase().includes(lowerCaseTerm)
		)
		this.postList.updatePosts(this.filteredPosts)
	}

	render() {
		document.getElementById('app').innerHTML = `
            <div class="app-container">
                <div id="search-bar"></div>
                <div id="post-list"></div>
            </div>
        `
		this.searchBar.render()
		this.postList.render()
	}
}

new MainApp()
