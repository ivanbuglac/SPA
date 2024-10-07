export default class PostItem {
	constructor(post) {
		this.post = post
	}

	render() {
		const wrapper = document.createElement('div')
		wrapper.classList.add('post-item')

		wrapper.innerHTML = `
            <h2>${this.post.name}</h2>
            <p>${this.post.body}</p>
            <button class="dlt-btn">X</button>
        `

		return wrapper
	}
}
