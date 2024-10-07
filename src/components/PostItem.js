export default class PostItem {
	constructor(post, onDelete) {
		this.post = post
		this.onDelete = onDelete
	}

	render() {
		const wrapper = document.createElement('div')
		wrapper.classList.add('post-item')

		wrapper.innerHTML = `
            <h2>${this.post.name}</h2>
            <p>${this.post.body}</p>
            <button class="dlt-btn">X</button>
        `

		const deleteButton = wrapper.querySelector('.dlt-btn')
		deleteButton.addEventListener('click', () => this.onDelete(this.post.id))

		return wrapper
	}
}
