import { PostForm } from '@/components/PostForm'
import React from 'react'
import { getPost } from '@/db/posts'
import { notFound } from 'next/navigation'
import { UserSelectOptions } from '../../userSelectOptions'

const page = async ({ params }: any) => {
	const postId = params.postId
	const post = await getPost(postId)

  if (post == null) return notFound()

	return (
		<>
			<h1 className='page-title'>Edit Post</h1>
			<PostForm post={post}  userSelectOptions={<UserSelectOptions />} />
		</>
	)
}

export default page
