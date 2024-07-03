type Comment = {
	id: number
	email: string
	body: string
	postId: number
}

export async function getComments(postId: string | number) {
	return fetch(`${process.env.API_URL}/posts/${postId}/comments`)
		.then(res => res.json())
		.then(data => data as Comment[])
}
