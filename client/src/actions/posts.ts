'use server'

import { createPost, deletePost, updatePost } from '@/db/posts'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const createPostAction = async (prevState: unknown, formData: FormData) => {
	const title = formData.get('title') as string
	const body = formData.get('body') as string
	const userId = Number(formData.get('userId'))

	const post = await createPost({ title, body, userId })

	revalidatePath('/posts')
	revalidatePath(`/users/${post.userId}`)
	redirect(`/posts/${post.id}`)
}

export const updatePostAction = async (postId: number, prevState: unknown, formData: FormData) => {
	const title = formData.get('title') as string
	const body = formData.get('body') as string
	const userId = Number(formData.get('userId'))

	const post = await updatePost(postId, { title, body, userId })

	revalidatePath('/posts')
	revalidatePath(`/posts/${post.id}`)
	revalidatePath(`/users/${post.userId}`)
	redirect(`/posts/${post.id}`)
}

export const deletePostAction = async (postId: string) => {
	await deletePost(postId)
	revalidatePath('/posts')
	redirect('/posts')
}
