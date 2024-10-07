import '@babel/polyfill'
import '../index.html'
import '../style.css'

import PostList from './components/PostList.js'
import posts from './data/info.js'
export default class MainApp {
	constructor() {
		this.posts = posts
		this.filteredPosts = posts

		this.postList = new PostList(this.filteredPosts)

		this.render()
	}

	render() {
		document.getElementById('app').innerHTML = `
            <div class="app-container">
                <div id="search-bar"></div>
                <div id="post-list"></div>
            </div>
        `

		this.postList.render()
	}
}

new MainApp()
