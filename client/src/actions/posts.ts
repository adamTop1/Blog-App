'use server'

import { createPost, deletePost, updatePost } from '@/db/posts'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const createPostAction = async (prevState: unknown, formData: FormData) => {
	const [data, errors] = validatePost(formData)

	if (data == null) return errors

	const post = await createPost(data)

	revalidatePath('/posts')
	revalidatePath(`/users/${post.userId}`)
	redirect(`/posts/${post.id}`)
}

export const updatePostAction = async (postId: number, prevState: unknown, formData: FormData) => {
	const [data, errors] = validatePost(formData)

	if (data == null) return errors

	const post = await updatePost(postId, data)

	revalidatePath('/posts')
	revalidatePath(`/posts/${post.id}`)
	revalidatePath(`/users/${post.userId}`)
	redirect(`/posts/${post.id}`)
}

export const deletePostAction = async (postId: string) => {
	const post = await deletePost(postId)

	revalidatePath(`/users/${post.userId}`)
	revalidatePath(`/posts/${post.id}`)
	revalidatePath('/posts')
	redirect('/posts')
}

const validatePost = (formData: FormData) => {
	const title = formData.get('title') as string
	const body = formData.get('body') as string
	const userId = Number(formData.get('userId'))

	let isValid = true
	const errors: { title?: string; body?: string; userId?: string } = {}

	if (title === '') {
		errors.title = 'Title is required'
		isValid = false
	}

	if (body === '') {
		errors.body = 'Body is required'
		isValid = false
	}

	if (isNaN(userId)) {
		errors.userId = 'Author is required'
		isValid = false
	}

	return [isValid ? { title, body, userId } : null, errors] as const
}
