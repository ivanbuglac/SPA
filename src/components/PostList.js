import PostItem from './PostItem.js'

export default class PostList {
	constructor(posts) {
		this.posts = posts
	}

	updatePosts(posts) {
		this.posts = posts
		this.render()
	}

	deletePost(postId) {
		this.posts = this.posts.filter(post => post.id !== postId)
		this.render()
	}

	render() {
		const postListElement = document.getElementById('post-list')
		postListElement.innerHTML = ''

		this.posts.forEach(post => {
			const postItem = new PostItem(post, this.deletePost.bind(this))
			const postElement = postItem.render()
			postListElement.appendChild(postElement)
		})
	}
}
