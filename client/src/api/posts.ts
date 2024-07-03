type Post = {
	id: number
	title: string
	body: string
	userId: number
}

export function getPosts() {
	return fetch(`${process.env.API_URL}/posts`)
		.then(res => res.json())
		.then(data => data as Post[])
}

export function getPost(postId: string | number) {
	return fetch(`${process.env.API_URL}/posts/${postId}`)
		.then(res => res.json())
		.then(data => data as Post)
}
