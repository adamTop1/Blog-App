'use server'

import { createPost, deletePost, updatePost } from '@/db/posts'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const createPostAction = async (formData: FormData) => {


    console.log('formData:', formData);

    const title = formData.get('title') as string
    const body = formData.get('body') as string
    const userId = Number(formData.get('userId'))



	const post = await createPost({title, body, userId})


	revalidatePath('/posts')
	revalidatePath(`/users/${post.userId}`)
	redirect(`/posts/${post.id}`)
}