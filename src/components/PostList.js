import PostItem from './PostItem.js'

export default class PostList {
	constructor(posts) {
		this.posts = posts
	}

	updatePosts(posts, container) {
		this.posts = posts
		this.render(container)
	}

	deletePost(postId, container) {
		this.posts = this.posts.filter(post => post.id !== postId)
		this.render(container)
	}

	render(container) {
		if (!container) {
			console.error('Ошибка')
			return
		}
		container.innerHTML = ''

		this.posts.forEach(post => {
			const postItem = new PostItem(post, id => this.deletePost(id, container))
			const postElement = postItem.render()
			container.appendChild(postElement)
		})
	}
}
